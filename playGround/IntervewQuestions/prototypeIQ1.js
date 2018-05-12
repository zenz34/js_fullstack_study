// from Paypal

function Foo() {}

Foo.prototype.shared = 0;

const a = new Foo();

Foo.prototype.shared++;
// 1

console.log(Foo.prototype.shared);
// 1

console.log(a.shared);
// 1
console.log(a.shared++);
// 2            //  I'm wrong. console.log first, then ++ will be operated
console.log(Foo.prototype.shared);
// 2            //  ?
console.log(a.shared);
// 2

/*

public class Test {
  void display(Object o) {

    System.out.println("Object");
  }


  void display(String str) {

    System.out.println("String");
  }
    public static void main(String[] args) {
      new Test().display(null);
    }
}


enum Animal {
  DOG("woof"), CAT("meow"), FISH("burble");
  String sound;
  Animals(String s) {
     sound = s;
     }

  }


  Class TestEnum {
    static Animals a;
    public static void main(String [] args) {
      System.out.println(a.DOG.sound + " " + a.FISH.sound);



      }


    }




public class qq29 {
  public static void main(String as[]) {
    String str1 = "Manish";
    String str2 = "ManishKumar";

    System.out.println(str1.compareTo(str2));
  }


}

protected class Test{
  public static void main(String args[]) {

    System.out.println("hello");

  }


}





****** 1


class qq50 {
  public static void main(String as[]) {
    Hello h = new Hello();

    h.show("Siri");
  }


}


class Hello{
  public void show(Object obj) {

    Hello h = (Hello) obj;
    System.out.println(h.toString());

  }
  public String toString() {
    return "Hello";
  }
}
******** 1




public class AStringQuestion
{
  static String s1;
  static String s2;

  public static void main(String args[]) {
    s2 = s1 + s2;
    System.out.println(s2);


  }

  }






public class qq41{
  static int ar[] = new int[2];

  public static void main(String as[]) {
    System.out.println("done");

  }

  static {
    ar[2] = 10;
    System.out.println(ar[2]);

  }

}



public class qq30 {
  public static void main(String as[]) {
    if ("String".endsWith("")) {
      System.out.println("True");
    } else {
      System.out.println("False");
    }

    }


}




public class qq26{
  final static String str;

  public static void main(String as[]) {
    String str = "ABC";
    System.out.println(qq26.str);

  }

  static {
    String str = "Hi";
    str = "XYZ";

  }

}



public class qq26{

  public static void main(String as[]) {
    Boolean b1 = new Boolean("TruE");
    Boolean b2 = new Boolean("true");
    System.out.println(b1.equals(b2));

  }

}



public class qq22{

  public static void main(String as[]) {
    qq22 t = new qq22();
    t.method();

  }

  public static void method() {
    System.out.println("NullPointerException");
  }
}
*/
