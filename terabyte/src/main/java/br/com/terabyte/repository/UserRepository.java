package br.com.terabyte.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.terabyte.model.UserModel;

public interface UserRepository extends CrudRepository<UserModel, Integer>{
    
}
