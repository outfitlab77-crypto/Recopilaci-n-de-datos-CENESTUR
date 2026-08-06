const fs = require('fs');
let content = fs.readFileSync('g:/VINCULACIÓN 2/index.html', 'utf8');

const target = `                'Servicios Turísticos y Guianza': 0,
        window.addEventListener('load', () => {`;

const replacement = `                'Servicios Turísticos y Guianza': 0,
                'Comercio General y Abarrotes': 0,
                'Otros': 0
            };

            records.forEach(r => {
                if (sectorsMap[r.sector] !== undefined) {
                    sectorsMap[r.sector]++;
                } else {
                    sectorsMap['Otros']++;
                }
            });

            barChartInstance.data.datasets[0].data = Object.values(sectorsMap);
            barChartInstance.update();
        }

        // Export Data to CSV file
        function exportToCSV() {
            if (records.length === 0) {
                alert('No hay datos disponibles para exportar.');
                return;
            }

            let csvContent = "data:text/csv;charset=utf-8,";
            csvContent += "ID,Negocio,Propietario,Sector,Ubicacion,Telefono,Puntaje_Total,Fecha\\n";

            records.forEach(r => {
                const row = \`"\${r.id}","\${r.businessName}","\${r.ownerName}","\${r.sector}","\${r.locationZone}","\${r.phone}",\${r.totalScore},"\${r.date}"\`;
                csvContent += row + "\\n";
            });

            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "Linea_Base_Emprendedores_Mitad_del_Mundo.csv");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        // Manejar el Splash Screen y animación de entrada
        window.addEventListener('load', () => {`;

content = content.replace(target, replacement);

fs.writeFileSync('g:/VINCULACIÓN 2/index.html', content, 'utf8');
console.log('Fixed exportToCSV using script3.js');
