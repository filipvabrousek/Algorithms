import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.*;

public class StressTest {
	static boolean isAlive = true;
	static String host = "localhost";
	static int port = 34000;
	public static void main(String[] args) {
		if (args.length > 0)
			host = args[0];
		if (args.length > 1)
			port = Integer.parseInt(args[1]);
		try {
			class vlakno_pozadavku extends Thread {
				public void run() {
                    Socket s = null;

					try {
						s = new Socket(host, port);
						InputStream is = s.getInputStream();
						OutputStream os = s.getOutputStream();
						long time = System.nanoTime();
						byte request[] = ("GET / HTTP/1.1\r\n"
								+ "Keep-Alive: timeout=5, max=1000\r\n\r\n").getBytes();
						byte pole[] = new byte[10000];
						int bytesIn = 0;
						int bytesOut = 0;
						while (isAlive) {
							os.write(request);
							os.flush();
							bytesOut += request.length;
							int status = is.read(pole);
							if (status == -1){
                                s.close();
                                isAlive = false;
                                break;
            
								
                            } else {
								bytesIn += status;
                            }
							long currentTime = System.nanoTime();
							if (currentTime - time > 1000000000) {
								System.out.println("bytesIn (kB/s): " + bytesIn / 1024 + ", bytesOut (kB/s): " + bytesOut / 1024);
								time = currentTime;
								bytesIn = 0;
								bytesOut = 0;
							}
						}

                        s.close();
						System.out.println("End of thread.");
					} catch (Exception e) {
						e.printStackTrace();

                        

                            try {
                                if (s != null){
                                s.close();
                                }
                            } catch(Exception ex){

                            }
                       
                        
                       
					}
				}
			}
			
			for (int i = 0; i < 10000; i++) {
				vlakno_pozadavku v = new vlakno_pozadavku();
				v.start();
			}
			
			int read;
			System.out.println("ENTER = stop");
			System.in.read();
			System.out.println("Connection halted.");
			isAlive = false;
			System.exit(0);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}