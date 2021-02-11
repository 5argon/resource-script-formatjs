/**
 * No formatting at the moment...
 */
export const out = `
import { IntlShape } from "react-intl"

/** comment 0 */
export default class outer {
  private intl: IntlShape
  constructor(i: IntlShape) {
    this.intl = i
  }

  
  /** comment 1.1 */
  get level11() {
    return {
      
  /** comment 2.1 */
  level21: {
    
  /** comment linked 1.1 */
  levelLinked11: {
    
  /** comment linked 2.1 */
  levelLinked21: this.intl.formatMessage({
    id: "outer.level11.level21.levelLinked11.levelLinked21",
    description: "comment linked 2.1",
    defaultMessage: "level-linked-21-string",
  })

  ,
  /** comment linked 2.2 */
  levelLinked22: this.intl.formatMessage({
    id: "outer.level11.level21.levelLinked11.levelLinked22",
    description: "comment linked 2.2",
    defaultMessage: "level-linked-22-string",
  })

  
  }
,
  /** comment linked 1.2 */
  levelLinked12: this.intl.formatMessage({
    id: "outer.level11.level21.levelLinked12",
    description: "comment linked 1.2",
    defaultMessage: "level-linked-12-string",
  })

  
  }
,
  /** comment 2.2 */
  level22: this.intl.formatMessage({
    id: "outer.level11.level22",
    description: "comment 2.2",
    defaultMessage: "level22-string",
  })

  ,
  /** comment 2.3 */
  level23: (firstArg: number) =>
  this.intl.formatMessage(
  {
    id: "outer.level11.level23",
    description: "comment 2.3",
    defaultMessage: "{firstArg} span string 1",
  },
  {
    firstArg: firstArg
  }
)

  ,
  /** comment 2.4 */
  level24: (firstArg: string,secondArg: string) =>
  this.intl.formatMessage(
  {
    id: "outer.level11.level24",
    description: "comment 2.4",
    defaultMessage: "{firstArg} span string 1 {secondArg} span string 2",
  },
  {
    firstArg: firstArg,secondArg: secondArg
  }
)

  ,
  /** comment 2.5 */
  level25: (firstArg: string,secondArg: string) =>
  this.intl.formatMessage(
  {
    id: "outer.level11.level25",
    description: "comment 2.5",
    defaultMessage: "span string 1 LitFunc span string 2 LitFunc",
  },
  {
    firstArg: firstArg,secondArg: secondArg
  }
)

  
    }
  }

  /** comment 1.2 */
  get level12() {
    return this.intl.formatMessage({
    id: "outer.level12",
    description: "comment 1.2",
    defaultMessage: "level12-string",
  })

  }

  /** comment 1.6 */
  get level16() {
    return this.intl.formatMessage({
    id: "outer.level16",
    description: "comment 1.6",
    defaultMessage: "level16-string",
  })

  }

}
`
