package com.exam.examserver.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.exam.examserver.model.UserRoll;

public interface UserRollRepository extends JpaRepository<UserRoll, Long> {

    @Modifying
    @Transactional
    @Query("delete from UserRoll ur where ur.user.id = :userId")
    void deleteAllByUserId(Long userId);
}
