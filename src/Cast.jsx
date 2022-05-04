import { For } from 'solid-js';

export default function Cast(props) {
  return (
    <>
      <label><b>Search for:</b> {props.key}</label>
      <div style={{
        "display": "grid",
        "grid-template-columns": "1fr 1fr 1fr 1fr",
        "gap": "15px",
        "text-align": "center",
        "line-height": "100%"
      }}>
        <For each={props.list}>
          {item =>
            <article style={{
              "margin:": "0",
            }}>
              <img src={`./images/${item.slug}_tn.svg`}
                alt={item.name} />
              <div style={{
                "font-weight": "bold",
                "margin-top": "1em"
              }}>{item.name}</div>
            </article>
          }
        </For>
      </div>
    </>
  )
}