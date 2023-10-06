package br.com.terabyte.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.terabyte.model.ProdutoModel;
import br.com.terabyte.repository.ProdutoRepository;

@RestController
@CrossOrigin("*")
public class ProdutoController {

    @Autowired
    ProdutoRepository pr;

    @GetMapping
    private Iterable<ProdutoModel> get() {
        return pr.findAll();
    }

    private byte[] imagem(Integer id) {
        Optional<ProdutoModel> produto = pr.findById(id);
        return produto.orElse(null).getImg();
    }

    @PostMapping
    private ResponseEntity<ProdutoModel> post(@RequestParam("img") MultipartFile img, @RequestParam("descri") String descri, @RequestParam("preco") Double preco, @RequestParam("tipo") Integer tipo){
        try {
            byte[] imgBytes = img.getBytes();
            ProdutoModel model = new ProdutoModel();
            model.setDescri(descri);
            model.setImg(imgBytes);
            model.setPreco(preco);
            model.setTipo(tipo);
            return new ResponseEntity<ProdutoModel>(pr.save(model), HttpStatus.CREATED);
        } catch (Exception e) {
            return null;
        }
    }

    @PutMapping
    private ResponseEntity<ProdutoModel> put(@RequestParam("id") Integer id, @RequestParam("img") MultipartFile img, @RequestParam("descri") String descri, @RequestParam("preco") Double preco, @RequestParam("tipo") Integer tipo){
        try {
            byte[] imgBytes;
            ProdutoModel model = new ProdutoModel();
            if (img.isEmpty()){
                imgBytes = imagem(id);
            } else {
                imgBytes = img.getBytes();
            }
            model.setId(id);
            model.setImg(imgBytes);
            model.setDescri(descri);
            model.setPreco(preco);
            model.setTipo(tipo);
            return new ResponseEntity<ProdutoModel>(pr.save(model), HttpStatus.OK);
        } catch (Exception e){
            return null;
        }
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<ProdutoModel> delete(@PathVariable Integer id){
        ProdutoModel produto = pr.findById(id).orElse(null);
        if( id != null){
            pr.deleteById(id);
            return new ResponseEntity<>(produto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
