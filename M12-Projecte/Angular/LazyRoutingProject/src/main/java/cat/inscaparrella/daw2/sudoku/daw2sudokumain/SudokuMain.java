package cat.inscaparrella.daw2.sudoku.daw2sudokumain;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;

public class SudokuMain extends Application {
    @Override
    public void start(Stage stage) throws IOException {
        FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("view/sudoku-view.fxml"));
        Scene scene = new Scene(fxmlLoader.load(), 700, 490);
        stage.setTitle("Sudoku Game");
        stage.setScene(scene);
        stage.show();
    }
}
