/**
 * Composant serveur qui injecte du JSON-LD au format Schema.org.
 * Rendu inline au SSR — aucun coût runtime côté client.
 *
 * Usage :
 *   <JsonLd data={organizationSchema()} />
 *   <JsonLd data={[organizationSchema(), websiteSchema()]} />
 */

type JsonLdData = Record<string, unknown> | Array<Record<string, unknown>>

export default function JsonLd({ data, id }: { data: JsonLdData; id?: string }) {
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
