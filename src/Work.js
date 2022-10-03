import './Work.css'

function Work () {
    return (
        <section class="work_block">
            <h1 class="work_item">Work</h1>
            <div class="work_item_content">        
                <h2 class="work_company">PricewaterhouseCoopers (Big Four)</h2>
                <p class="description"></p>
            </div>
            <div class="work_item_content">
                <h2 class="work_company">Focal Point</h2>
                <p class="description">
                    In 2017, I started my IT auditing career at a small Florida based company performing internal audits. 
                    Coming from a computer science background, I used my coding knowledge to more accurately perform 
                    IT audits through code inspection. Later, I would go on to develop controls for various companies
                    who were implementing new systems in order for them to be SOX compliant.
                </p>
            </div>
        </section>
    )
}

export default Work;