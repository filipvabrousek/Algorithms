import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;

public class Site {


    // https://moodle.utb.cz/mod/assign/view.php?id=459554
    static boolean isAlive = true; 

    public static void main(String[] args){

        String host = "smpt.utb.cz";
        int port = 25;

        if (args.length > 0){
           host= args[0];
           if (args.length > 1){
               port = Integer.parseInt(args[1]);
           }
        }

        try {
            Socket socket = new Socket("smtp.utb.cz", 25);
            InputStream input = socket.getInputStream();
            OutputStream output = socket.getOutputStream();
            

            public class MyThread extends Thread {
                 public void run(){
                        try {
                            while (isAlive) {
                            int key = System.in.read();
                            output.write(key);
                            output.flush();
                         }

                        } catch (IOException e){
                            e.printStackTrace();
                        }
                 }
            }

            Thread v = new thread();
            thread.start();
            int read;

            while (read = input.read() != -1){
                System.out.write(read);
                System.out.flush();
            }

            System.out.println("Connection ended.");
            v.interrupt();
            alive = true; // not needed, we cannot renew sleep caused by OS, only way out is keyboard press
            System.exit(0);
            

        } catch (Exception e){
            e.printStackTrace();
        }


        return;
    }
}

// GET / AKREDITACE HTTP 1.0

/*
1) Make new.java file VSCode
2) javac Site.java
3) java Site
*/