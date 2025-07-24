using System;

namespace FirstConsoleApp
{

    // 11) Classes and objects in C#
    class Car
    {
        public string Name;
        public string Color;

        public Car()
        {
            this.Name = "Default Car";
            this.Color = "Default Color";
        }
        public Car(string name, string color)
        {
            this.Name = name;
            this.Color = color;
        }

        public void DisplayInfo()
        {
            Console.WriteLine($"Car Name: {Name}, Color: {Color}");
        }
    }
    class Program
    {
        // 9) Methods in C# (Also see the below for usage)
        static void sayHi(string name)
        {
            Console.WriteLine("Hello, " + name + "!");
        }
        static void Main(string[] args)
        {
            // 1) Printing to Console
            //Console.WriteLine("Hello, World 1");
            //Console.Write("Hello, World 2"); // Write does not include a new line
            //Console.WriteLine("Hello, World 3");

            // 2) Variables and Datatypes in C#
            /*
            (i) int
            (ii) long
            (ii) float
            (ii) double
            (iii) char
            (iv) string
            (v) bool
             */
            //string myame = "Geetansh";
            //string username = Console.ReadLine();
            //Console.WriteLine("Hello, " + username + ". I am " + myame);

            //char grade = 'A';
            //float percentage = 89.5F;
            //double pi = 3.14;

            // 3) Type Casting using C# methods (Other than implicit and explicit casting)
            //string numberString = "123";
            //int number = Convert.ToInt32(numberString); // Converts string to int
            //Console.WriteLine("Converted number: " + number);

            // 4) Operators in C#
            /*
                1) Arithmetic Operators: +, -, *, /, %
                2) Assignment Operators: =, +=, -=, *=, /=, %=
                3) Comparison Operators: ==, !=, >, <, >=, <=
                4) Logical Operators: &&, ||, !
             */

            // 5) Math class in C#
            //Console.WriteLine(Math.Max(1,100));
            //Console.WriteLine(Math.Sqrt(100));

            // 6) String Manipulation in C#
            //string name = "Geetansh Bhardwaj";
            //Console.WriteLine(name[0]); 
            //Console.WriteLine(name.Length); 
            //Console.WriteLine(name.ToLower()); 
            //Console.WriteLine(name.ToUpper());

            //// String Interpolation in C#
            //Console.WriteLine($"Hello, {name}. Welcome to the C# world!");


            // 7) Conditional Statements in C#
            //int age = 18;
            //if(age > 18)
            //{
            //    Console.WriteLine("You are an adult.");
            //}
            //else if(age == 18)
            //{
            //    Console.WriteLine("You might be an adult in some countries!");
            //}
            //else
            //{
            //    Console.WriteLine("You are a minor.");
            //}

            //int day = 'M';
            //switch (day)
            //{
            //    case 'S':
            //        Console.WriteLine("Holiday!");
            //        break;
            //    default:
            //        Console.WriteLine("Not a Holiday!");
            //        break;
            //}

            // 8) Loops in C#
            //for(int i = 0; i < 5; i++)
            //{
            //    Console.WriteLine("Iteration: " + i);
            //}

            //int j = 0; //Note thay you can NOT use "int i = 0;" here in C# {in C++ you can!}
            //while (j < 5)
            //{
            //    Console.WriteLine("While Loop Iteration: " + j);
            //    j++;
            //}

            // 9) Methods in C# (Also see the top of this file)
            //sayHi("Geetansh");

            // 10) Arrays in C#
            //string[] names = {"Volvo", "BMW", "Ford", "Mazda"};
            //Console.WriteLine(names[0]); 

            // 11) Classes and objects in C# (Also see the top of this file)
            Car myCar = new Car("Celerio", "Grey");
            myCar.DisplayInfo();
        }
    }
}
