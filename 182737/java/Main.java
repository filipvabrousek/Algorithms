import java.io.*;
import java.net.*;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadPoolExecutor;

public class Main {

    public static void main(String[] args) {
        String host = "localhost";
        int port = 34000;
        if (args.length > 0) {
            host = args[0];
        }

        if (args.length > 1) {
            port = Integer.parseInt(args[1]);
        }

        class requestTask implements Runnable {
            Socket s;

            public requestTask(Socket socket) {
                s = socket;
                // this.start();
            }

            public void run() {
                try {
                    InputStream iStream = s.getInputStream();
                    OutputStream oStream = s.getOutputStream();
                    System.out.println("Client connected: " + s.getInetAddress() + ":" + s.getPort());
                    byte buffer[] = new byte[10000];
                    int count;
                    int sum = 0;

                    long startTime = System.nanoTime();
                    

                    while ((count = iStream.read(buffer)) != -1) {
                        sum += count;

                        long currentTime = System.nanoTime() - startTime;

                        if ((sum > 1 << 20) || currentTime > 5_000_000_000L) { // = 1MB LEFT SHIFT
                            System.out.println("Překročen datový limit, ukončuji spojení.");
                            s.close();
                        } else {
                            oStream.write(buffer, 0, count);
                            oStream.flush();
                        }
                    }
                    System.out.println("Connection ended.");
                } catch (IOException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }
            }
        }

        try {

            int counter = 0;
            ServerSocket server = new ServerSocket(port);

            ThreadPoolExecutor executor = (ThreadPoolExecutor) Executors.newFixedThreadPool(1000);

            System.out.println("Server started on port " + port);
            while (true) {
                Socket socket = server.accept();
                executor.execute(new requestTask(socket));

                counter += 1;
                System.out.println("Counter=" + counter);
                // requestThread thread = new requestThread(socket);
            }
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

}

// javac Main.java && java Main
// javac StressTest.java && java StressTest