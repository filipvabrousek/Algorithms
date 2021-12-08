import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Arrays;
import java.util.HashMap;

class Main {
public static void main(String args[]) throws NoSuchAlgorithmException, IOException {  //static method{

// user_id;nejaky_nahodny_retezec_coby_salt;hashovane_osolene_heslo

       // String myCSV = "1;mySalt:saltedPass";

        HashMap<String, String> map = new HashMap<String, String>();

        /*
        * SaltA:HashA,
SaltB:HashB

        * */
        BufferedReader br = new BufferedReader(new FileReader("data.csv"));
        String line =  null;

        while((line=br.readLine())!=null) {
                //System.out.println("STEP 1");
                String[] str = line.split(",");
               // System.out.println("STEP 2");
               // System.out.println(str[0]);

                /*
                * SaltA:HashA,
                  SaltB:HashB
                * */

                for (int i = 0; i < str.length; i++) {
                        System.out.println("STEP 3");
                        String arr[] = str[i].split(":");
                        System.out.println("Do I have it below?");
                        System.out.println(str[i]);
                        map.put(arr[0], arr[1]);
                }



               /* for (int i = 1; i < str.length; i++) {
                        System.out.println("STEP 3");
                        String arr[] = str[i].split(";");
                        map.put(arr[0], arr[1]);
                }*/
        }

        System.out.print(map);




        // NAMES and CLEAR Text Passwords

        // user_id;nejaky_nahodny_retezec_coby_salt;hashovane_osolene_heslo




        class ToCSV {
                final String name;
                final String clearText;

                ToCSV(String name, String clearText){
                        this.name = name;
                        this.clearText = clearText;
                }
        }

        ToCSV[] scenes = {
                new ToCSV("UserA", "passwordA"),
                new ToCSV("UserB", "passwordB"),
                new ToCSV("UserC", "passwordC")
        };


        for (int i = 0; i < scenes.length; i++){
                String name = scenes[i].name;
                String clearText = scenes[i].clearText;



                SecureRandom random = new SecureRandom();
                byte[] salt = new byte[16];
                random.nextBytes(salt);


                MessageDigest md = MessageDigest.getInstance("SHA-512");
                md.update(salt);

                byte[] hashedPassword = md.digest(clearText.getBytes(StandardCharsets.UTF_8));
               // String result = System.Text.Encoding.UTF8.GetString(hashedPassword);

               // System.out.println("Hashed password for clearText is %s", hashedPassword);

                String saltToString = new String(salt, StandardCharsets.UTF_8);
                String hashedPasswordString = new String(hashedPassword, StandardCharsets.UTF_8);

                System.out.println("ID: " + name + " \n SALT: " + saltToString);
                System.out.println("\n hashedSalt:" + hashedPasswordString + "\n CLEARTEXT: " + clearText);
        }



        /*
        *    // 1 - SALT THE PASSWORd
        System.out.println("Static method");

        SecureRandom random = new SecureRandom();
        byte[] salt = new byte[16];
        random.nextBytes(salt);


        MessageDigest md = MessageDigest.getInstance("SHA-512");
        md.update(salt);

        byte[] hashedPassword = md.digest("Filip".getBytes(StandardCharsets.UTF_8));
        System.out.println(hashedPassword);
        * */





























        }
}

