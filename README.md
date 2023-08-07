# Component Library Workshop

## My reflections

### Progress Bar

- Choosing const STYLES over composition: I used variations built on top of BaseBar at first. This is a less good choice than creating a const STYLES and passing styles for different sizes because

  - The major variation is height, and for 'large' there's a padding, nothing else. Composition is a better choice when there's vastly different looks
  - I was limited by the belief that const STYLES can only store styles to be applied onto the same component. That's not true. The only divide it has is small/medium/size, and upon each an object is returned with styles that ANY component can access using 'styles.padding' ('object[CSSProperty]')

- Accessibility for progress bar

  - Using 'role' and aria values to allow screen readers know what it is and how best to read it
  - 'VisuallyHidden' is a safety measure to ensure the value of progress is read to the user (in case progress bar is not identified)

- Misc learnings
  - 'Trimmed Corners': A great way to prevent content seeping through a rounded box (container with smaller border radius): set overflow!
  - width of bar should be dynamic - so can be put into any container and looks good
  - Add error reminder when accessing an object, in case it's nullish, so that I can quickly pinpoint the problem - saves lots of time
  - Adding a BarWrapper is a solution for 'large' in which its padding prevents the overflow setting to truncate the radius. Note how adding a layer can solve such problem, essentially taking up the Wrapper's responsibility to have a border radius and sets hidden overflow.
  - 'concentric circles': When there's padding in between two rounded boxes, if they have the same border radius, the distance between corners would be larger than between sides (one has higher height). Adjusting the outer box's radius (decreasing) can make it prettier.

### Select

- 'PresentationalBit' component: finding a middle ground between using the native html select element and reinventing a select from the ground up - using select to ensure mobile and accessibility experience while having complete control over how (the actual select presented) it looks (e.g. icon looks, width, shadows...). **This can also be applied on other hard-to-style form control elements.**

  - Setting a relatively positioned wrapper which wraps the native select (absolutely positioned) and then the presentational div.
  - Wrapping the Icon around an IconWrapper, allowing it to position absolutely too (or use Flexbox). Note need to

- Getting outline to display: when we hide the native select, we hide its focus ring as well. The selector instead is to select the presentational bit _when_ the native select is in focus, using '+' (adjacent sibling selector)

---

In this workshop, we'll build 3 components from scratch:

1. ProgressBar
2. Select
3. IconInput

Most of the pertinent information will be stored in the Figma document (https://www.figma.com/file/u0wCdLXheiN9f2FmAuPsE9/Mini-Component-Library), but this README will contain some additional information to help you on your mission!

Two fully-formed components have already been included, to be used as-needed in your work:

- `Icon`, an icon component that uses `react-feather` to render various icons
- `VisuallyHidden`, a component that allows us to make text available to screen-reader users, but not to sighted users.

Additionally, all of the colors you'll need are indexed in `constants.js`.

All components in this project use [the `Roboto` font](https://fonts.google.com/specimen/Roboto). This font is already included in the Storybook environment, and is already applied to all elements. It comes in two weights:

- 400 (default)
- 700 (bold)

## Running Storybook

This project uses Storybook, a component development tool.

First, install dependencies with `npm install`.

Once dependencies are installed, you can start storybook by running:

```
npm run start
```

Once running, you can visit storybook at http://localhost:6006.

## Troubleshooting

You may get an error when running the `start` script that looks like this:

```
Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:67:19)
    at Object.createHash (node:crypto:130:10)
```

You can fix this issue either by downgrading to Node 16, or by updating the `package.json` file as follows:

```diff
  "scripts": {
-   "start": "start-storybook -p 6006 -s public",
+   "start": "NODE_OPTIONS=--openssl-legacy-provider start-storybook -p 6006 -s public",
  },
```

For more info, check out the [Troubleshooting Guide](https://courses.joshwcomeau.com/troubleshooting) on the course platform.

## The Components

### ProgressBar

The figma document mentions that this component should be "accessible". You can learn how to build a semantically-valid, accessible progress-bar component by reading this doc: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role

This component uses a **box shadow**. We haven't seen this property yet! For now, you can achieve this effect by copying the following CSS declaration into your component:

```css
box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
```

We'll learn much more about the `box-shadow` property in future modules =)

### Select

The Select component will need a down-arrow icon! You can use the `chevron-down` ID with the `Icon` component.

We want to use a native `<select>` tag in this component, so a bit of precursory HTML has been provided.

This component also includes a function, `getDisplayedValue`. This component uses some React APIs to work out the text that should be displayed. The value isn't currently used, but you can make use of it if needed, depending on your implementation.

> **NOTE:** Hiding the built-in chevron
>
> The `<select>` tag has a built-in chevron (downward-pointing
> character), but it's inconsistent between browsers. We want to
> use the provided “chevron-down” icon. But how do we replace the
> default built-in one??
>
> This is something we haven't learned how to do, and so you'll need
> to do some googling + experimentation. I want you to get a bit
> of practice trying to tackle “unconventional” challenges like this!
>
> If you get stuck and/or would like a hint, you'll find one on
> the solution page:
> https://courses.joshwcomeau.com/css-for-js/03-components/19-workshop-select#select

### IconInput

This component also uses the `Icon` component — the specific ID will be provided as a prop.

This component requires bold text. You can achieve this look by using `font-weight: 700`.
