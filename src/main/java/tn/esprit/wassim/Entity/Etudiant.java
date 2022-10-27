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

public class Etudiant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int IdEtudiant ;
    private String prenomE ;
    private String nomE ;
   @Enumerated(EnumType.STRING)
    private Option option ;

   @OneToMany (mappedBy = "etudiant", cascade = CascadeType.REMOVE, orphanRemoval = true)
   private List<Contrat>  contrats ;
   @ManyToOne
   private  Departement dept ;
   @ManyToMany(fetch=FetchType.EAGER)

   private List<Equipe> equipes ;
}
