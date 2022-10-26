package tn.esprit.wassim.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name ="Equipe")

public class Equipe {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int idEquipe ;
    private String nomEquipe ;
    @OneToOne(mappedBy = "equipe")

    private DetailEquipe detailEquipe ;
    @ManyToMany (mappedBy = "equipes",fetch=FetchType.EAGER)
    private List<Etudiant> etudiants ;

}
