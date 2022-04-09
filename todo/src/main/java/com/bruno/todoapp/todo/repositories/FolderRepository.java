package com.bruno.todoapp.todo.repositories;

import com.bruno.todoapp.todo.entities.Folder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FolderRepository extends JpaRepository<Folder,Integer> {

}
