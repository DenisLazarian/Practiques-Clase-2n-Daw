package cat.inscaparrella.daw2sudokuproject.view;

import javafx.fxml.FXML;
import javafx.scene.control.Button;

public class SudokuView {
    @FXML
    private Button buttonOne;

    @FXML
    public void onButtonOneClick() {
        System.out.println("Botó 1");
    }
}
