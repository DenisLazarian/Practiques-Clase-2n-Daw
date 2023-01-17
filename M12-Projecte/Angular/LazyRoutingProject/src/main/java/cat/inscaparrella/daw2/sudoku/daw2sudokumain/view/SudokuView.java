package cat.inscaparrella.daw2.sudoku.daw2sudokumain.view;

import javafx.event.Event;
import javafx.event.EventHandler;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.canvas.Canvas;
import javafx.scene.canvas.GraphicsContext;
import javafx.scene.control.Button;
import javafx.scene.input.MouseEvent;
import javafx.scene.paint.Color;

import java.net.URL;
import java.util.ResourceBundle;

public class SudokuView implements Initializable{

    private class CanvasMouseEventHandler implements EventHandler<MouseEvent>{

        @Override
        public void handle(MouseEvent mouseEvent) {
            int mouseX = (int) mouseEvent.getX();
            int mouseY = (int) mouseEvent.getY();

            rcell = mouseX / 50;
            ccell = mouseY / 50;

            drawOnCanvas(csudoku.getGraphicsContext2D());
        }
    }




    @FXML
    private  Canvas csudoku;
    private int rcell, ccell = -1;

   /* @FXML
    private Button buttonOne;
    @FXML
    private Button buttonTwo;
    @FXML
    private Button buttonThree;
    @FXML
    private Button buttonFour;
    @FXML
    private Button buttonFive;
    @FXML
    private Button buttonSix;
    @FXML
    private Button buttonSeven;
    @FXML
    private Button buttonEight;
    @FXML
    private Button buttonNine; */




    @Override
    public void initialize(URL url, ResourceBundle resourceBundle) {
        GraphicsContext context = this.csudoku.getGraphicsContext2D();
        this.drawOnCanvas(context);
    }



    private void drawOnCanvas(GraphicsContext context){
        int width = 46, roundArc = 20;
        // dibujar en el cambas.
        context.clearRect(0,0,450,450);

        context.setFill(Color.BLUE);
        //context.setFill(Color.YELLOW);
        //context.setLineWidth(10);
        //context.fillRoundRect(0, 0, 450,450, roundArc,roundArc);

        context.setFill(Color.YELLOW);
        int x, y;

        for (int row = 0; row<9; row++){
            for (int col = 0; col<9; col++){
                x = row * 50 + 2;
                y = col * 50 + 2;
                context.fillRoundRect(x, y ,width, width, roundArc, roundArc);
            }
        }

        x = rcell * 50 + 2;
        y = ccell * 50 + 2;
        context.setFill(Color.RED);
        context.setLineWidth(10);
        context.fillRoundRect(0, 0, 450,450, roundArc,roundArc);
    }



}
