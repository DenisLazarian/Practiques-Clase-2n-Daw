package cat.inscaparrella.daw2sudokuproject;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;

public class DAW2SudokuMain extends Application {

    public static void main(String[] args) {
        Application.launch(args);
    }

    @Override
    public void start(Stage stage) throws Exception {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("view/sudoku-view.fxml"));
        Scene scene = new Scene(loader.load(), 813, 514);
        stage.setScene(scene);
        stage.show();
    }
}
