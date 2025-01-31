/**
 * LWM2M Software Management
 *
 * This LwM2M objects provides the resources needed to perform software
 * management on the device. Each software component is managed via a dedicated
 * Software Management Object instance.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/9.xml
 *
 * ID: 9
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type LWM2MSoftwareManagement_9 = Readonly<
	Array<{
		'0': PkgName_0
		'1': PkgVersion_1
		'7': UpdateState_7
		'9': UpdateResult_9
		'12': ActivationState_12
		'2'?: Package_2
		'3'?: PackageURI_3
		'5'?: Checkpoint_5
		'8'?: UpdateSupportedObjects_8
		'13'?: PackageSettings_13
		'14'?: UserName_14
		'15'?: Password_15
		'16'?: StatusReason_16
		'17'?: SoftwareComponentLink_17
		'18'?: SoftwareComponenttreelength_18
	}>
>
/**
 * PkgName
 *
 * Name of the software package
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type PkgName_0 = string
/**
 * PkgVersion
 *
 * Version of the software package
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type PkgVersion_1 = string
/**
 * Update State
 *
 * Indicates current state with respect to this software update. This value is
 * set by the LwM2M Client.
 * 0: INITIAL
 * Before downloading.
 * (see 5.1.2.1)
 * 1: DOWNLOAD STARTED
 * The downloading process has started and is on-going.
 * (see 5.1.2.2)
 * 2: DOWNLOADED
 * The package has been completely downloaded
 * (see 5.1.2.3)
 * 3: DELIVERED
 * In that state, the package has been correctly downloaded and is ready to be
 * installed.
 * (see 5.1.2.4)
 * If executing the Install Resource failed, the state remains at DELIVERED.
 * If executing the Install Resource was successful, the state changes from
 * DELIVERED to INSTALLED.
 * After executing the UnInstall Resource, the state changes to INITIAL.
 * 4: INSTALLED
 * In that state the software is correctly installed and can be activated or
 * deactivated according to the Activation State Machine.
 * (see 5.1.2.5)
 *
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: true
 */
type UpdateState_7 = number
/**
 * Update Result
 *
 * Contains the result of downloading or installing/uninstalling the software
 * 0: Initial value. Prior to download any new package in the Device, Update
 * Result MUST be reset to this initial value. One side effect of executing the
 * Uninstall resource is to reset Update Result to this initial value "0".
 * 1: Downloading. The package downloading process is on-going.
 * 2: Software successfully installed.
 * 3: Successfully Downloaded and package integrity verified
 * (( 4-49, for expansion, of other scenarios))
 * 50: Not enough storage for the new software package.
 * 51: Out of memory during downloading process.
 * 52: Connection lost during downloading process.
 * 53: Package integrity check failure.
 * 54: Unsupported package type.
 * 56: Invalid URI
 * 57: Device defined update error
 * 58: Software installation failure
 * 59: Uninstallation Failure during forUpdate(arg=0)
 * 60-200 : (for expansion, selection to be in blocks depending on new
 * introduction of features)
 * This Resource MAY be reported by sending Observe operation.
 *
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: true
 */
type UpdateResult_9 = number
/**
 * Activation State
 *
 * Indicates the current activation state of this software:
 * 0: DISABLED
 * Activation State is DISABLED if the Software Activation State Machine is in
 * the INACTIVE state or not alive.
 * 1: ENABLED
 * Activation State is ENABLED only if the Software Activation State Machine is
 * in the ACTIVE state
 *
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: true
 */
type ActivationState_12 = boolean
/**
 * Package
 *
 * Software package
 * The package can be in one single software component, or any delivery material
 * used by the Device to determine the software component(s) and proceed to
 * their installation.
 * Can be archive file, executable, manifest. This resource to be used when it
 * is single block of delivery.
 *
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type Package_2 = string
/**
 * Package URI
 *
 * URI from where the device can download the software package by an alternative
 * mechanism. As soon the device has received the Package URI it performs the
 * download at the next practical opportunity.
 * Can be direct link to a single software component or link to archive file,
 * executable, or manifest, used by the Device to determine, then access to the
 * software component(s). This resource to be used when it is single block of
 * delivery.
 *
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type PackageURI_3 = string
/**
 * Checkpoint
 *
 * Link to a "Checkpoint" object which allows to specify conditions/dependencies
 * for a software update. E.g. power connected, sufficient memory, target
 * system.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type Checkpoint_5 = string
/**
 * Update Supported Objects
 *
 * If this value is true, the LwM2M Client MUST inform the registered LwM2M
 * Servers of Objects and Object Instances parameter by sending an Update or
 * Registration message after the software update operation at the next
 * practical opportunity if supported Objects in the LwM2M Client have changed,
 * in order for the LwM2M Servers to promptly manage newly installed Objects.
 * If false, Objects and Object Instances parameter MUST be reported at the next
 * periodic Update message.
 * The default value is false.
 *
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 */
type UpdateSupportedObjects_8 = boolean
/**
 * Package Settings
 *
 * Link to "Package Settings" object which allows to modify at any time software
 * configuration settings. This is an application specific object.
 * Note: OMA might provide a template for a Package Settings object in a future
 * release of this specification.
 *
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 */
type PackageSettings_13 = string
/**
 * User Name
 *
 * User Name for access to SW Update Package in pull mode.
 * Key based mechanism can alternatively use for talking to the component server
 * instead of user name and password combination.
 *
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: false
 */
type UserName_14 = string
/**
 * Password
 *
 * Password for access to SW Update Package in pull mode.
 *
 * ID: 15
 * MultipleInstances: false
 * Mandatory: false
 */
type Password_15 = string
/**
 * Status Reason
 *
 * Contains the status of the actions done by the client on the SW Component(s)
 * referred by the present SW Update Package. The status is defined in Appendix
 * B.
 *
 * ID: 16
 * MultipleInstances: false
 * Mandatory: false
 */
type StatusReason_16 = string
/**
 * Software Component Link
 *
 * Reference to SW Components downloaded and installed in scope of the present
 * SW Update Package Note: When resource 17 objlink exist, resources 2, 3 and 12
 * in this table are ignored.
 *
 * ID: 17
 * MultipleInstances: true
 * Mandatory: false
 */
type SoftwareComponentLink_17 = string
/**
 * Software Component tree length
 *
 * Software Component tree length indicates the number of instances existing for
 * this software package in the Software Component Object.
 *
 * ID: 18
 * MultipleInstances: false
 * Mandatory: false
 */
type SoftwareComponenttreelength_18 = number
/**
 * The objectURN for LWM2M Software Management
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '9'
