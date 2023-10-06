package br.com.terabyte.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.terabyte.model.ProdutoModel;

public interface ProdutoRepository extends CrudRepository<ProdutoModel, Integer>{
    
}
