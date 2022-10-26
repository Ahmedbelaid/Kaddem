package tn.esprit.wassim.Entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Departement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
     private int idDepart ;
    private String nomDepart ;
    @OneToMany  (mappedBy="dept")
    private List<Etudiant> etudiants ;


}
