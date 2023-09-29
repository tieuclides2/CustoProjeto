import Styles from './ProjectForm.module.css'

function ProjectForm() {
    return (
        <form className={Styles.form}> 
            <div>
                <input type="Text" placeholder="Insira o nome do projeto" />
            </div>
            <div>
                <input type="number" placeholder="Insira o orçamento total" />
            </div>
            <div>
                <select name="category_id">
                    <option disabled>
                        Selecione a categoria
                    </option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar Projeto"/>
            </div>

        </form>
    )
}

export default ProjectForm