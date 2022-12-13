<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

        input{
            width: 100px;
        }

        #enviar{
            margin-top: 30px;
        }


    </style>
</head>
<body>
    
    <h1>Cercador de Vols, Empresa Denis S.L</h1>

    <hr>
    <form method="get" action="recollir_dades.jsp">

        <table>

            <tr>
                <td>nombre d'adults</td>
                <td><input type="number" name="adults" id="adults" placeholder="0"></td>
            </tr>
            <tr>
                <td>nombre d'infants(menors de 12 anys)</td>
                <td><input type="number" name="infants" id="infants" placeholder="0"></td>
            </tr>
            <tr>
                <td>nombre d'infants(menors de 2 anys)</td>
                <td><input type="number" name="infants2" id="infants2" placeholder="0"></td>
            </tr>
            <tr>
                <td>Sortida</td>
                <td>
                    <select name="selector-ciudad"  id="selector-ciudad">
                        <option value="">Ciudad</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Lleida">Lleida</option>
                        <option value="Bucarest">Bucarest</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Linchestein">Linchestein</option>
                        <option value="Dublin">Dublin</option>
                    </select>
                
                </td>
            </tr>
            <tr>
                <td>Arribada</td>
                
            <!-- <%= request.getParameter("adults")%> -->
                    
                <td>
                    <select name="selector-ciudad2"  id="selector-ciudad2">
                        <option value="">ciudad</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Lleida">Lleida</option>
                        <option value="Bucarest">Bucarest</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Linchestein">Linchestein</option>
                        <option value="Dublin">Dublin</option>
                    </select>
                
                </td>
    
                
    
                <td>
                <!-- <select name="menu-selector" id="selector-ciudad" ></select> -->
                
                </td>
    
            </tr>
            <tr>
                <td>Data sortida</td>
                <td><input type="date" name="data-sortida" id="data-sortida"></td>
            </tr>
            <tr>
                <td>Data arribada</td>
                <td><input type="date" name="data-arribada" id="data-arribada"></td>
            </tr>
            
            
    
    
    
        </table>

        <input type="submit" name="submit" value="Enviar dades">

        
    </form>
    

</body>
</html>