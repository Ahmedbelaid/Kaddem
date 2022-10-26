package tn.esprit.wassim.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import tn.esprit.wassim.Entity.Departement;
import tn.esprit.wassim.Repository.DepartementRepository;

@Service

public class DepartementServiceimp implements DepartementService {

@Autowired
    DepartementRepository departementRepository ;

@Override
public Departement Adddepartement (Departement departement) {
    return departementRepository.save(departement);

}
@Override
    public Departement UpdateDepartment (int id,Departement departement) {

    if (departementRepository.findById(id).isPresent()) {
        return departementRepository.save(departement );
    }
    else return null;

}
}
