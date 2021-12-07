import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;

 class StressTest {
    static boolean isAlive = true;

    public static void main(String[] args){
        try {


            String host = "www.idnes.cz";
            int port = 80;

            if (args.length > 0){
                host = args[0];
                if (args.length > 1){
                    port = Integer.parseInt(args[1]);
                }
            }



            Socket socket = new Socket(host, port);
            InputStream input = socket.getInputStream();
            OutputStream output = socket.getOutputStream();

             class MyThread extends Thread {
                public void run(){
                    try {

                       // RandomStringGenerator pwdGenerator = new RandomStringGenerator.Builder().withinRange(33, 45)
                               // .build();
                      //  return pwdGenerator.generate(length);

                        while (isAlive) {
                            output.write("GET / HTTP/1.1\r\n Keep alive: timeout=5 max=10000\r\n\r\n".getBytes());
                            output.flush();
                            byte array[] = new byte[1000];
                            int status = input.read(array);
                            if (status == -1){
                                System.out.println("End of the thread.");
                            }
                        }

                    }  catch (IOException e){
                        e.printStackTrace();
                    }

                       /* } catch (IOException e){
                            e.printStackTrace();
                        }*/
                }
            }


            for (int i = 0; i < 10000; i++){
                MyThread v = new MyThread();
                v.start();
            }


            int read;
            System.out.println("konec = enter");
            System.in.read();
            System.out.println("Nashle");
            isAlive = false;   // not needed, we cannot renew sleep caused by OS, only way out is keyboard press
            System.exit(0);
        } catch (Exception e){
            e.printStackTrace();
        }




    }
}
