package tn.esprit.wassim.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.wassim.Entity.Contrat;
import tn.esprit.wassim.Services.ContratService;

import java.util.List;

@RestController
@RequestMapping("contrats")

public class ContratController {

@Autowired
    ContratService contratService;


    @Autowired
    @GetMapping
    public List<Contrat> displayContrats() { return contratService.getAllContrats();}

    @PostMapping
    public Contrat addContrat (@RequestBody Contrat contrat) {
        return contratService.addContrat(contrat);
    }

    @PutMapping("{id}")
    public Contrat updateContrat (@PathVariable("id") int id,@RequestBody Contrat contrat) {
        return contratService.updateContrat(id, contrat);
    }

    @DeleteMapping("{id}")
    public String deleteContrat(@PathVariable("id") int id) {
        return contratService.deleteContrat(contratService.getById(id));

    }
    @GetMapping("{id}")
    public Contrat getContratById(@PathVariable("id")int id){
        return contratService.getById(id);

    }
}
