let subjects = [];

function addSubject() {
    const subjectInput = document.getElementById("subject").value;
    const dayInput = document.getElementById("day").value;
    const timeInput = document.getElementById("time").value;
    const roomInput = document.getElementById("room").value;
    const instructorInput = document.getElementById("instructor").value;

    const subject = {
        subject: subjectInput,
        day: dayInput,
        time: timeInput,
        room: roomInput,
        instructor: instructorInput
    };

    subjects.push(subject);

    displaySubjects();
    clearForm();
}

function displaySubjects() {
    const subjectTableBody = document.getElementById("subject-table-body");
    subjectTableBody.innerHTML = "";

    subjects.forEach((subject, index) => {
        const row = subjectTableBody.insertRow();
        row.innerHTML = `
            <td>${subject.subject}</td>
            <td>${subject.day}</td>
            <td>${subject.time}</td>
            <td>${subject.room}</td>
            <td>${subject.instructor}</td>
            <td><button onclick="deleteSubject(${index})">Delete</button></td>
        `;
    });
}

function deleteSubject(index) {
    subjects.splice(index, 1);
    displaySubjects();
}

function clearForm() {
    document.getElementById("subject").value = "";
    document.getElementById("day").value = "";
    document.getElementById("time").value = "";
    document.getElementById("room").value = "";
    document.getElementById("instructor").value = "";
}

displaySubjects();