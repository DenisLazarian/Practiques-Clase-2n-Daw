module cat.inscaparrella.daw2sudokuproject {
    requires javafx.controls;
    requires javafx.fxml;

    requires org.controlsfx.controls;
    requires com.dlsc.formsfx;
    requires org.kordamp.bootstrapfx.core;

    opens cat.inscaparrella.daw2sudokuproject.view to javafx.fxml;
    exports cat.inscaparrella.daw2sudokuproject;
}