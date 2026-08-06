const fs = require('fs');
let content = fs.readFileSync('g:/VINCULACIÓN 2/index.html', 'utf8');

const targetIndex = content.indexOf('            radarChartInstance.update();');
if (targetIndex !== -1) {
    const startOfKeep = content.substring(0, targetIndex + 40);
    const replacement = `

            // Bar sectors calculation
            const sectorsMap = {
                'Gastronomía y Alimentación': 0,
                'Artesanías y Recuerdos': 0,
                'Textil y Vestimenta': 0,
                'Servicios Turísticos y Guianza': 0,
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
        window.addEventListener('load', () => {
            const splash = document.getElementById('splash-screen');
            const mobileNav = document.getElementById('mobile-nav-bar');
            
            setTimeout(() => {
                splash.style.opacity = '0';
                
                // Mostrar la barra inferior un poco después de que empiece a desvanecerse el splash
                setTimeout(() => {
                    if (mobileNav) {
                        mobileNav.classList.remove('opacity-0', 'translate-y-24', 'pointer-events-none');
                    }
                }, 300);

                setTimeout(() => {
                    splash.style.display = 'none';
                }, 1000);
            }, 1200);
        });
    </script>
</body>
</html>`;
    
    fs.writeFileSync('g:/VINCULACIÓN 2/index.html', startOfKeep + replacement, 'utf8');
    console.log('Restored perfectly');
}
