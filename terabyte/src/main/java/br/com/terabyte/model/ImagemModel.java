package br.com.terabyte.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "imagens")
public class ImagemModel {
    @Id
    private Integer id;
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] img1;
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] img2;
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] img3;
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] img4;
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] img5;
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] img6;
}
