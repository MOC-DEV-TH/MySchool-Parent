class UpcomingExam {
  constructor(
    id,
    sessionId,
    name,
    note,
    startDate,
    endDate,
    createdAt,
    updatedAt
  ) {
    this.id = id;
    this.sessionId = sessionId;
    this.name = name;
    this.note = note;
    this.startDate = startDate;
    this.endDate = endDate;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export default UpcomingExam;
