package tn.esprit.wassim.Services;

import tn.esprit.wassim.Entity.Contrat;

import java.util.List;

public interface ContratService {

    public Contrat addContrat(Contrat contrat);

    Contrat updateContrat(int id, Contrat contrat);

    public String deleteContrat(Contrat contrat);

    public List<Contrat> getAllContrats();

    public Contrat getById (int id);
}
