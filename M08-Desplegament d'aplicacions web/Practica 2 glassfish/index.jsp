<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <table border="1">

        <tr>
            <td><img width="170" height="221" src="/imatges/smile.jpg" alt=""></td>
            <td>Sinopsis <br> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore aperiam dolor doloremque optio vel eius, explicabo debitis ad. Nesciunt, iure veniam minus ullam facere inventore quasi eos unde nihil cum?</td>
        </tr>

        <tr>
            <td>
                SMILE <br>
                dijous 12 de octubre 2022 - 22:40h
                <br><br>
                JCA CINEMES JCA CINEMES ALPICAT <br>
                SALA 05 <br>
                Durada: 115 minuts <br>
                
            </td>
            <td>
                SEIENTS
                <table>

                    <%
                    boolean passadis_sortida_dreta = true;               
                    boolean passadis_sortida_esquerra = false;    
                    
                    // Indica quina la columna on esta la taula utilitzada per al passadis 


                    int nombre_passadis = 2;


                    for(int i = 0; i<15; i++)
                    {
                        out.println("<tr>");
                            for(int j = 0; j<15;j++){

                                out.println("<td>hola</td>");
                                
                            }
                        out.println("</tr>");
                    }

                    %>

                </table>
                

            </td>


        </tr>


    </table>
    
</body>
</html>