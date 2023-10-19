package br.com.terabyte.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.terabyte.model.ImagemModel;
import br.com.terabyte.repository.ImagemRepository;

@RestController
@CrossOrigin("*")
public class ImagemController {
    
    @Autowired
    public ImagemRepository ir;

    @GetMapping("/imgsCad/{id}")
    public ImagemModel getImgs(@PathVariable Integer id){
        return ir.findById(id).orElse(null);
    }

    @PostMapping("/imgsCad/")
    public ResponseEntity<ImagemModel> cadImgs(@RequestParam("id") Integer id, @RequestParam("img1") MultipartFile img1, @RequestParam("img2") MultipartFile img2, @RequestParam("img3") MultipartFile img3, @RequestParam("img4") MultipartFile img4, @RequestParam("img5") MultipartFile img5, @RequestParam("img6") MultipartFile img6){
        try {
            ImagemModel model = new ImagemModel();
            model.setId(id);

            if(!(img1.isEmpty())){
                byte[] bytesImg1 = img1.getBytes();
                model.setImg1(bytesImg1);
            }
            if(!(img2.isEmpty())){
                byte[] bytesImg2 = img2.getBytes();
                model.setImg2(bytesImg2);
            }
            if(!(img3.isEmpty())){
                byte[] bytesImg3 = img3.getBytes();
                model.setImg3(bytesImg3);
            }
            if(!(img4.isEmpty())){
                byte[] bytesImg4 = img4.getBytes();
                model.setImg4(bytesImg4);
            }
            if(!(img5.isEmpty())){
                byte[] bytesImg5 = img5.getBytes();
                model.setImg5(bytesImg5);
            }
            if(!(img6.isEmpty())){
                byte[] bytesImg6 = img6.getBytes();
                model.setImg6(bytesImg6);
            }
            return new ResponseEntity<ImagemModel>(ir.save(model), HttpStatus.CREATED);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

}
