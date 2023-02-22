class Student {
  constructor(
    id,
    sessionId,
    classId,
    sectionId,
    name,
    image,
    email,
    class_name,
    section,
    rollNo,
    admissionDate,
    gender,
    bloodGroup
  ) {
    this.id = id;
    this.sessionId = sessionId,
    this.classId = classId,
    this.sectionId = sectionId,
    this.name = name;
    this.image = image;
    this.email = email;
    this.class_name = class_name;
    this.section = section;
    this.rollNo = rollNo;
    this.admissionDate = admissionDate;
    this.gender = gender;
    this.bloodGroup = bloodGroup;
  }
}

export default Student;
