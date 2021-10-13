import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;

public class Site {


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

            while (true){

                if (input.available() > 0){
                    int read = input.read();
                    System.out.write(read);
                    System.out.flush();
                }

                if (System.in.available() > 0) {
                    int key = System.in.read();
                    output.write(key);
                    output.flush();
                }

            }

        } catch (Exception e){
            e.printStackTrace();
        }
    }
}

/*
1) Make new.java file VSCode
2) javac Site.java
3) java Site
*/