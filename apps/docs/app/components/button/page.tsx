"use client";

import { CodeExample } from "../../_components/CodeExample";
import { TableOfContents, type TocEntry } from "../../_components/TableOfContents";
import styles from "./page.module.css";

type Section = {
  id: string;
  title: string;
  description: string;
  code: string;
};

const sections: Section[] = [
  {
    id: "variants",
    title: "Variants",
    description:
      "Three structural variants cover most needs: primary for the main action on a screen, secondary for an alternate action, and outline for lower-emphasis actions.",
    code: `<>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
</>`,
  },
  {
    id: "colors",
    title: "Colors",
    description:
      "Six comic-flavored accent colors are available for special-purpose actions, beyond the structural variants above.",
    code: `<>
  {accents.map((accent) => (
    <Button key={accent} variant={accent}>
      {accent}
    </Button>
  ))}
</>`,
  },
  {
    id: "sizes",
    title: "Sizes",
    description: "Use the size prop for a smaller or larger button.",
    code: `<>
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</>`,
  },
  {
    id: "shadow",
    title: "Shadow",
    description:
      "Buttons use a hard, comic-style offset shadow by default. Use the shadow prop to change its depth, or turn it off entirely.",
    code: `<>
  <Button shadow="none">No shadow</Button>
  <Button shadow="sm">Small shadow</Button>
  <Button shadow="md">Medium shadow</Button>
  <Button shadow="lg">Large shadow</Button>
</>`,
  },
  {
    id: "icons",
    title: "Buttons with icons",
    description:
      "Use leadingIcon or trailingIcon to pair a button with an icon from any icon library. Button doesn't depend on one itself.",
    code: `<>
  <Button leadingIcon={<PiRocketLaunchBold />}>Launch</Button>
  <Button trailingIcon={<PiArrowRightBold />}>Continue</Button>
  <Button variant="outline" leadingIcon={<PiTrashBold />}>
    Delete
  </Button>
</>`,
  },
  {
    id: "loading",
    title: "Loading",
    description:
      "Set loading to replace the button's icon with a spinner and disable interaction, useful while an action is in flight. It stays close to full opacity so it doesn't read as fully disabled.",
    code: `<Button loading>Loading</Button>`,
  },
  {
    id: "disabled",
    title: "Disabled",
    description: "Set disabled to prevent interaction and dim the button.",
    code: `<Button disabled>Disabled</Button>`,
  },
  {
    id: "handling-clicks",
    title: "Handling clicks",
    description:
      "Button accepts every native <button> prop, including onClick, applied to the root element.",
    code: `<Button onClick={comicBurst}>Click me</Button>`,
  },
];

type ApiRow = {
  prop: string;
  type: string;
  defaultValue: string;
  description: string;
};

const apiRows: ApiRow[] = [
  {
    prop: "variant",
    type: "'primary' | 'secondary' | 'outline' | 'gamma' | 'vision' | 'villain' | 'cosmic' | 'mutant' | 'vibranium'",
    defaultValue: "'primary'",
    description: "Visual style and color.",
  },
  {
    prop: "size",
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: "Font size. Padding is fixed across sizes.",
  },
  {
    prop: "shadow",
    type: "'none' | 'sm' | 'md' | 'lg'",
    defaultValue: "'sm'",
    description: "Depth of the hard offset shadow.",
  },
  {
    prop: "leadingIcon",
    type: "ReactNode",
    defaultValue: "None",
    description: "Icon rendered before the label.",
  },
  {
    prop: "trailingIcon",
    type: "ReactNode",
    defaultValue: "None",
    description: "Icon rendered after the label.",
  },
  {
    prop: "loading",
    type: "boolean",
    defaultValue: "false",
    description:
      "Shows a spinner in place of the leading icon and disables the button.",
  },
  {
    prop: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disables the button and dims it.",
  },
  {
    prop: "...rest",
    type: "ButtonHTMLAttributes<HTMLButtonElement>",
    defaultValue: "None",
    description:
      "Every native button prop (onClick, type, aria-*, and so on) passes through to the root element.",
  },
];

const accessibilityRows: ApiRow[] = [
  {
    prop: "aria-label",
    type: "string",
    defaultValue: "None",
    description:
      "Accessible name for the button when it has no visible text, such as an icon-only button.",
  },
  {
    prop: "aria-pressed",
    type: "boolean",
    defaultValue: "None",
    description: "Marks the button as a toggle and reports its pressed state.",
  },
  {
    prop: "aria-expanded",
    type: "boolean",
    defaultValue: "None",
    description:
      "Reports whether a region the button controls (a menu, a panel) is currently open.",
  },
  {
    prop: "aria-describedby",
    type: "string",
    defaultValue: "None",
    description: "Points to an element with extra descriptive text for the button.",
  },
  {
    prop: "aria-busy",
    type: "boolean",
    defaultValue: "false",
    description: "Set automatically to true when loading is true. Not something you pass yourself.",
  },
  {
    prop: "disabled",
    type: "boolean",
    defaultValue: "false",
    description:
      "Native attribute, also removes the button from the tab order per default browser behavior.",
  },
];

const tocEntries: TocEntry[] = [
  ...sections.map((section) => ({ id: section.id, label: section.title })),
  { id: "api", label: "API" },
  { id: "accessibility", label: "Accessibility" },
];

export default function ButtonPage() {
  return (
    <div className={styles.pageGrid}>
      <article className={styles.article}>
        <header className={styles.header}>
          <h1>Button</h1>
          <p>
            Buttons let people trigger an action with a single tap. They show
            up throughout the UI, in forms, cards, toolbars, and dialogs.
            Every example below is editable, change the code and the preview
            updates live.
          </p>
        </header>

        {sections.map((section) => (
          <section key={section.id} id={section.id} className={styles.section}>
            <h2>{section.title}</h2>
            <p className={styles.description}>{section.description}</p>
            <CodeExample code={section.code} />
          </section>
        ))}

        <section id="api" className={styles.section}>
          <h2>API</h2>
          <p className={styles.description}>
            <code>Button</code> is exported from <code>@powui/react</code>.
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {apiRows.map((row) => (
                  <tr key={row.prop}>
                    <td>
                      <code>{row.prop}</code>
                    </td>
                    <td>
                      <code>{row.type}</code>
                    </td>
                    <td>
                      <code>{row.defaultValue}</code>
                    </td>
                    <td>{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="accessibility" className={styles.section}>
          <h2>Accessibility</h2>
          <p className={styles.description}>
            Button renders a real <code>&lt;button&gt;</code>, so it&apos;s
            keyboard-operable and focusable with no extra work. These are the
            accessibility-relevant props worth knowing about, on top of the
            ones in the API table above.
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {accessibilityRows.map((row) => (
                  <tr key={row.prop}>
                    <td>
                      <code>{row.prop}</code>
                    </td>
                    <td>
                      <code>{row.type}</code>
                    </td>
                    <td>
                      <code>{row.defaultValue}</code>
                    </td>
                    <td>{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </article>

      <TableOfContents entries={tocEntries} />
    </div>
  );
}
