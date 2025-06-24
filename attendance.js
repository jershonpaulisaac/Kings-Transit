const busButtonsContainer = document.getElementById('bus-buttons');
const attendanceContainer = document.getElementById('attendance');

const routeNumbers = [
  '02', '03', '04', '05', '06', '08', '09', '10', '11', '12',
  '14', '15', '16', '17', '18', '19', '20', '21', '22', '23',
  '24', '25', '26', '27', '28', '29', '30', '31'
];

const studentData = {
  '02': ['Alice Johnson', 'Brian Smith'],
  '03': ['Carla Miller', 'David Lee'],
  '04': ['Emily Davis', 'Frank Moore'],
  '05': ['Grace Clark', 'Henry Lewis'],
  '06': ['Isla Young', 'Jack Hall'],
  '08': ['Kara Allen', 'Liam Scott'],
  '09': ['Mia Adams', 'Noah Baker'],
  '10': ['Olivia Perez', 'Paul Turner'],
  '11': ['Quinn Hill', 'Ruby Mitchell'],
  '12': ['Sam Carter', 'Tina Ward'],
  '14': ['Umar Foster', 'Vera Graham'],
  '15': ['Will Knight', 'Xena Brooks'],
  '16': ['Yuri Ross', 'Zoe Price'],
  '17': ['Aaron Reed', 'Bella Cook'],
  '18': ['Caleb Murphy', 'Diana Rivera'],
  '19': ['Ethan Bell', 'Fiona Kelly'],
  '20': ['Gavin Cox', 'Hailey Hayes'],
  '21': ['Ian Bryant', 'Jade Powell'],
  '22': ['Kevin Barnes', 'Laura Peterson'],
  '23': ['Mason Simmons', 'Nina Jenkins'],
  '24': ['Oscar Webb', 'Piper Fuller'],
  '25': ['Quincy Matthews', 'Riley Harper'],
  '26': ['Sophie Howell', 'Tyler Kennedy'],
  '27': ['Uma Stephens', 'Victor Black'],
  '28': ['Wendy Dean', 'Xander Boyd'],
  '29': ['Yasmine Holt', 'Zack Butler'],
  '30': ['Abby George', 'Ben Wheeler'],
  '31': ['Cindy Andrews', 'Derek Ryan']
};

const allAttendance = {};
let currentRoute = '';

const generateStudents = (route) => {
  currentRoute = `Route ${route}`;
  return studentData[route] || [];
};

const renderStudents = (students) => {
  attendanceContainer.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.gap = '40px';
  wrapper.style.alignItems = 'flex-start';
  wrapper.style.justifyContent = 'center';

  const studentList = document.createElement('div');
  studentList.className = 'student-list';
  studentList.style.flex = '2';

  const today = new Date().toLocaleDateString();

  const statusTable = document.createElement('div');
  statusTable.innerHTML = `
    <h3 style="margin-bottom: 15px; text-align: center;">Live Attendance Status<br><small>${today}</small></h3>
    <div style="max-height: 500px; overflow-y: auto;">
      <table id="status-table" style="width: 100%; border-collapse: collapse;">
        <thead style="background-color: #e3f2fd;">
          <tr>
            <th style="text-align: left; padding: 6px 10px; border-bottom: 2px solid #90caf9;">Student Name</th>
            <th style="text-align: left; padding: 6px 10px; border-bottom: 2px solid #90caf9;">Status</th>
            <th style="text-align: left; padding: 6px 10px; border-bottom: 2px solid #90caf9;">Time</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  `;
  statusTable.style.flex = '1';
  statusTable.style.padding = '10px';
  statusTable.style.background = '#fff';
  statusTable.style.borderRadius = '12px';
  statusTable.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';

  const statusBody = statusTable.querySelector('tbody');

  if (allAttendance[currentRoute]) {
    allAttendance[currentRoute].forEach(({ name, status, time }) => {
      const row = statusBody.insertRow();
      const nameCell = row.insertCell(0);
      const statusCell = row.insertCell(1);
      const timeCell = row.insertCell(2);
      nameCell.textContent = name;
      statusCell.textContent = status;
      timeCell.textContent = time;
      statusCell.className = status.toLowerCase();
      nameCell.style.padding = statusCell.style.padding = timeCell.style.padding = '6px 6px';
    });
  }

  students.forEach(name => {
    const studentDiv = document.createElement('div');
    studentDiv.className = 'student';

    const nameSpan = document.createElement('span');
    nameSpan.textContent = name;

    const presentBtn = document.createElement('button');
    presentBtn.textContent = 'P';
    presentBtn.className = 'btn present';
    presentBtn.addEventListener('click', () => updateStatusTable(name, 'Present'));

    const absentBtn = document.createElement('button');
    absentBtn.textContent = 'A';
    absentBtn.className = 'btn absent';
    absentBtn.addEventListener('click', () => updateStatusTable(name, 'Absent'));

    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'student-buttons';
    buttonGroup.appendChild(presentBtn);
    buttonGroup.appendChild(absentBtn);

    studentDiv.appendChild(nameSpan);
    studentDiv.appendChild(buttonGroup);

    studentList.appendChild(studentDiv);
  });

  wrapper.appendChild(studentList);
  wrapper.appendChild(statusTable);
  attendanceContainer.appendChild(wrapper);
};

const updateStatusTable = (studentName, status) => {
  const table = document.getElementById('status-table').querySelector('tbody');
  const currentTime = new Date().toLocaleTimeString();
  let row = Array.from(table.rows).find(r => r.cells[0].textContent === studentName);

  if (!row) {
    row = table.insertRow();
    const nameCell = row.insertCell(0);
    const statusCell = row.insertCell(1);
    const timeCell = row.insertCell(2);
    nameCell.textContent = studentName;
    statusCell.textContent = status;
    timeCell.textContent = currentTime;
    statusCell.className = status.toLowerCase();
    nameCell.style.padding = statusCell.style.padding = timeCell.style.padding = '6px 6px';
  } else {
    row.cells[1].textContent = status;
    row.cells[2].textContent = currentTime;
    row.cells[1].className = status.toLowerCase();
    row.cells[0].style.padding = row.cells[1].style.padding = row.cells[2].style.padding = '6px 6px';
  }

  if (!allAttendance[currentRoute]) allAttendance[currentRoute] = [];
  const existing = allAttendance[currentRoute].find(s => s.name === studentName);
  if (existing) {
    existing.status = status;
    existing.time = currentTime;
  } else {
    allAttendance[currentRoute].push({ name: studentName, status, time: currentTime });
  }

  const routeKey = currentRoute.split(' ')[1];
  const total = studentData[routeKey].length;
  const recorded = allAttendance[currentRoute]?.length || 0;
  const busButtons = document.querySelectorAll('.bus-button');

  busButtons.forEach(btn => {
    if (btn.textContent === currentRoute) {
      if (recorded === total) {
        btn.classList.add('active-bus');
      } else {
        btn.classList.remove('active-bus');
      }
    }
  });

  // ✅ Show download button after any attendance
  document.getElementById('download-container').style.display = 'block';
};

routeNumbers.forEach(route => {
  const btn = document.createElement('button');
  btn.textContent = `Route ${route}`;
  btn.className = 'bus-button';

  btn.addEventListener('click', () => {
    const students = generateStudents(route);
    renderStudents(students);

    const routeKey = `Route ${route}`;
    const attendanceList = allAttendance[routeKey] || [];
    const totalStudents = studentData[route]?.length || 0;
    const markedCount = attendanceList.length;

    if (markedCount === totalStudents) {
      btn.classList.add('active-bus');
    } else {
      btn.classList.remove('active-bus');
    }
  });

  busButtonsContainer.appendChild(btn);
});

function downloadAttendance() {
  const wb = XLSX.utils.book_new();

  for (const route in allAttendance) {
    const data = [['Student Name', 'Status', 'Time']];
    allAttendance[route].forEach(({ name, status, time }) => {
      data.push([name, status, time]);
    });
    const ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, route);
  }

  const now = new Date();
  const filename = `Attendance_${now.toLocaleDateString().replace(/\//g, '-')}.xlsx`;
  XLSX.writeFile(wb, filename);
}
