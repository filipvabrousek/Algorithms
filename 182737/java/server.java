import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

import jdk.nashorn.internal.ir.RuntimeNode.Request;

public class Site {

    public static void main(String[] args) {

        class MyThread extends Thread {

            private Socket socket;

            public void run() {
                this.socket = socket;
                this.start();

                try {
                    Socket s;
                    InputStream input = socket.getInputStream();
                    OutputStream output = socket.getOutputStream();
                    int BytesIn = 0;
                    int BytesOut = 0;

                    byte array = new byte[1000];
                    int status = is.read(array);

                    while (runRead) {
                        os.write("GET / HTTP/1.1\r\n" + "Keep-Alive: timeout=5, max=1000\r\n\r\n").getBytes();
                        os.flush();

                        BytesOut += Request.length;

                        int innerStatus = is.read(array);
                        if (innerStatus == -1) {
                            runRead = false;
                        } else {
                            BytesIn += status;
                        }

                        int character;
                        while ((character = input.read()) != -1) {
                            output.write(character);
                            output.flush();
                        }

                        System.out.println("End of connection");

                        if (System.nanoTime() - time > 100000000) {
                            System.out.println(BytesIn);
                        }
                    }

                    System.out.println("We ended.");
                } catch (Exception e) {
                    e.printStackTrace();
                }
                /*
                 * int character; while((character = input.read()) != -1){
                 * output.write(character); output.flush(); }
                 * 
                 * System.out.println("End of connection");
                 */
            }
        }

        try {
            int counter;
            int port = 9999;
            ServerSocket server = new ServerSocket(port);
            while (true) {

                Socket socket = server.accept();
                MyThread thread = MyThread(socket);
                counter += 1;
                System.out.println("Counter=" + counter);

            }
        }

        finally {
            System.out.println("Finall");

        }
    }
}

/*
 * 1) javac Site.java 3) java Site
 */