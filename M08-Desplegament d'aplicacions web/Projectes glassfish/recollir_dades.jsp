<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Cercador de Vols, Empresa Denis S.L</h1>

    <hr>
    
    <table>
        <tr>
            <td for="adults" style="width: 60%;">nombre d'aldults</td>
            <td style="width: 40%;"><%= request.getParameter("adults")%></td>
        </tr>
        <tr>
            <td for="infants" style="width: 60%;">nombre d'infants(menors de 12 anys)	</td>
            <td style="width: 40%;"><%= request.getParameter("infants")%></td>
        </tr>
        <tr>
            <td for="infants2" style="width: 60%;">nombre d'infants(menors de 2 anys)</td>
            <td style="width: 40%;"><%= request.getParameter("infants2")%></td>
        </tr>
        <tr>
            <td for="selector-ciudad" style="width: 60%;">Sortida</td>
            <td style="width: 40%;"><%= request.getParameter("selector-ciudad")%></td>
        </tr>
        <tr>
            <td for="selector-ciudad2" style="width: 60%;">Arribada</td>
            <td style="width: 40%;"><%= request.getParameter("selector-ciudad2")%></td>
        </tr>
        <tr>
            <td for="data-sortida" style="width: 60%;">Data sortida</td>
            <td style="width: 40%;"><%= request.getParameter("data-sortida")%></td>
        </tr>
        <tr>
            <td for="data-arribada" style="width: 60%;">Data arribada</td>
            <td style="width: 40%;"><%= request.getParameter("data-arribada")%></td>
        </tr>
        
    </table>


</body>
</html>