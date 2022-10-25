import { Injectable } from '@angular/core';
import { Specialties } from '../models/specialties.model';

@Injectable({
  providedIn: 'root'
})
export class SpecialtiesService {

  constructor() { }

  getAllSpecialties(): Specialties[] {
    return [{
      id: 1,
      title: "Odontologist",
      description: "Odontology is the study of teeth. Odontologists study their development and diseases and analyze their structure. It is a specialty of dentistry that helps to identify unknown remains and connect bite marks to a specific individual.",
      iconUrl: "assets/icons/tooth.png"
    },
    {
      id: 2,
      title: "Dermatologist",
      description: "A dermatologist is a medical doctor who specializes in conditions that affect the skin, hair, and nails. Whether it's rashes, wrinkles, psoriasis, or melanoma, no one understands your skin, hair, and nails better than a board-certified dermatologist. The skin is an incredible organ.",
      iconUrl: "assets/icons/dermatology.png"
    },
    {
      id: 3,
      title: "Neurologist",
      description: "Neurologists are specialists who treat diseases of the brain and spinal cord, peripheral nerves and muscles. Neurological conditions include epilepsy, stroke, multiple sclerosis (MS) and Parkinson's disease.",
      iconUrl: "assets/icons/brain.png"
    },
    {
      id: 4,
      title: "Pediatrician",
      description: "A pediatrician is a doctor who focuses on the health of infants, children, adolescents and young adults. Pediatric care starts at birth and lasts through a child's 21st birthday or longer. Pediatricians prevent, detect and manage physical, behavioral and developmental issues that affect children.",
      iconUrl: "assets/icons/pacifier.png"
    },
    {
      id: 5,
      title: "Obstetrician",
      description: "An obstetrician is a physician that specializes in delivering babies and caring for people during pregnancy and after they give birth. They treat medical conditions unique to pregnancy and perform surgeries related to labor and delivery.",
      iconUrl: "assets/icons/obstetrical.png"
    },
    {
      id: 6,
      title: "Ophthalmologist",
      description: "An ophthalmologist is an eye care specialist. Unlike optometrists and opticians, ophthalmologists are doctors of medicine (MD) or doctors of osteopathy (DO) who have specific training and experience diagnosing and treating eye and vision conditions.",
      iconUrl: "assets/icons/eye.png"
    },
    {
      id: 7,
      title: "Orthopedics",
      description: "Orthopaedics (also called orthopaedic surgery) is the medical specialty that focuses on injuries and diseases of your body's musculoskeletal system. This complex system, which includes your bones, joints, ligaments, tendons, muscles, and nerves, allows you to move, work, and be active.",
      iconUrl: "assets/icons/hand-bones.png"
    },
    {
      id: 8,
      title: "General Practitioner",
      description: "In the medical profession, a general practitioner (GP) is a physician who treats acute and chronic illnesses and provides preventive care and health education to patients of all ages. Their duties are not confined to specific fields of medicine, and they have particular skills in treating people with multiple health issues.",
      iconUrl: "assets/icons/stethoscope.png"
    },
    ];
  }
}

