export class TodoList {
    ajouter(tache) {
        if (!this.taches) {
            this.taches = [];
        }
        this.taches.push({ tache, completed: false });
    }

    marquer(tacheTexte) {
        if (this.taches) {
            const index = this.taches.findIndex(item => item.tache === tacheTexte);
            if (index !== -1) {
                this.taches[index] = { ...this.taches[index], completed: true };
            }
        }
    }

    lister() {
        if (this.taches && this.taches.length > 0) {
            this.taches.forEach((item, i) => {
                console.log(`${i + 1}. ${item.tache} - ${item.completed ? "✅ Terminée" : "❌ Non terminée"}`);
            });
        } else {
            console.log("Aucune tâche.");
        }
    }
}
