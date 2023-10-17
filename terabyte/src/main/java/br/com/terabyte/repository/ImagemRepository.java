package br.com.terabyte.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.terabyte.model.ImagemModel;

public interface ImagemRepository extends CrudRepository<ImagemModel, Integer>{
    
}
