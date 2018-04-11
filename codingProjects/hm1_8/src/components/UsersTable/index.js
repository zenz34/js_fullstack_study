import React, { Component } from "react";
import TableHead from "../TableHead";
import TableBody from "../TableBody";
import { Table } from "reactstrap";
import Page from "../Page";
import SearchBar from "../SearchBar";
import { connect } from "react-redux";

class UsersTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterName: "",
            users: this.props.users,
            numOnePage: 5,
            curPageIndex: 0
        };

        console.log("users");
        console.log(this.state.users);
    }

    getFilterUsers = filter => {
        let filteredUsers = this.props.users.filter(element => {
            if (element.FName.indexOf(filter)) {
                return true;
            } else if (element.LName.indexOf(filter)) {
                return true;
            }

            return false;
        });
        this.setState({ users: filteredUsers });
    };

    searchBarhandler = e => {
        let filter = e.target.value;
        this.setState({ filterName: filter }, () => {
            if (filter === 0) {
                //showFilter = false;
                this.setState({ users: this.props.users });
            } else {
                //showFilter = true;
                let filteredUsers = this.getFilterUsers(filter);
                this.setState({ users: filteredUsers });
            }
        });
    };

    fNameSortUsersHandler = () => {
        let newUsers = this.state.users.sort((a, b) => {
            var nameA = a.FName.toUpperCase();
            var nameB = b.FName.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            return 0;
        });
        this.setState({ users: newUsers });
    };

    lNameSortUsersHandler = () => {
        let newUsers = this.state.users.sort((a, b) => {
            var nameA = a.LName.toUpperCase();
            var nameB = b.LName.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            return 0;
        });
        this.setState({ users: newUsers });
    };

    titleSortUsersHandler = () => {
        let newUsers = this.state.users.sort((a, b) => {
            var titleA = a.Title.toUpperCase();
            var titleB = b.Title.toUpperCase();
            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1;
            }

            return 0;
        });
        this.setState({ users: newUsers });
    };

    ageSortUsersHandler = () => {
        let newUsers = this.state.users.sort((a, b) => {
            return a.Age - b.Age;
        });
        this.setState({ users: newUsers });
    };

    sexSortUsersHandler = () => {
        let newUsers = this.state.users.sort((a, b) => {
            var sexA = a.Sex.toUpperCase();
            var sexB = b.Sex.toUpperCase();
            if (sexA < sexB) {
                return -1;
            }
            if (sexA > sexB) {
                return 1;
            }

            return 0;
        });
        this.setState({ users: newUsers });
    };

    getPageIndexHandler = page => {
        this.setState({ curPageIndex: page });
    };

    prePageHandler = () => {
        this.setState({ curPageIndex: this.state.curPageIndex - 1 });
    };

    postPageHandler = () => {
        this.setState({ curPageIndex: this.state.curPageIndex + 1 });
    };

    render() {
        return (
            <div>
                <SearchBar
                    val={this.state.filterName}
                    onChHandler={this.searchBarhandler}
                />
                <Table responsive>
                    <TableHead
                        fNameSortHandler={this.fNameSortUsersHandler}
                        lNameSortHandler={this.lNameSortUsersHandler}
                        titleSortHandler={this.titleSortUsersHandler}
                        ageSortHandler={this.ageSortUsersHandler}
                        sexSortHandler={this.sexSortUsersHandler}
                    />
                    <TableBody
                        val={
                            this.state.users !== undefined
                                ? this.state.users.slice(
                                      this.state.curPageIndex *
                                          this.state.numOnePage,
                                      (this.state.curPageIndex + 1) *
                                          this.state.numOnePage
                                  )
                                : []
                        }
                    />
                </Table>
                <Page
                    num={Math.ceil(
                        this.state.users.length / this.state.numOnePage
                    )}
                    getPgIndexHandler={this.getPageIndexHandler}
                    prePageHandler={this.prevPageIndexHandler}
                    nextPageHandler={this.nextPageHandler}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps)(UsersTable);
