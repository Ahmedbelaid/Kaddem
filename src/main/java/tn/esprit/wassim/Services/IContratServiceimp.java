package tn.esprit.wassim.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.wassim.Entity.Contrat;
import tn.esprit.wassim.Repository.ContratRepository;


import java.util.List;

@Service
public class IContratServiceimp implements ContratService {

    @Autowired
    ContratRepository contratRepository;




public Contrat addContrat(Contrat contrat) {return contratRepository.save(contrat);}
    @Override
    public Contrat updateContrat(int id, Contrat contrat) {
    Contrat contrat1 = contratRepository.findById(id).orElse(null);
    if (contrat1!=null) {
        contrat1.setDateDebutContrat(contrat.getDateDebutContrat());
        contrat1.setDateFinContrat(contrat.getDateFinContrat());
        contrat1.setArchive(contrat.getArchive());
        contrat1.setSpecialite(contrat.getSpecialite());

        return contratRepository.save(contrat1);

    }
    else return null;
    }
    @Override
    public String deleteContrat(Contrat contrat){
    if(contrat != null) {
        contratRepository.delete(contrat);
        return "contrat supprimé";

    }

    return "contrat non existant";
    }
    @Override
    public List<Contrat> getAllContrats(){
    return contratRepository.findAll();
    }

    @Override
    public Contrat getById(int id) {
        return contratRepository.findById(id).orElse(null);
    }





}
