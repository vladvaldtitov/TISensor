/**
* Created by Vlad on 2/24/2015.
*/
var tisensortag;
(function (tisensortag) {
    var Consts = (function () {
        function Consts() {
        }
        Consts.ACCELEROMETER_SERVICE = 'f000aa10-0451-4000-b000-000000000000';
        Consts.ACCELEROMETER_CONFIG = 'f000aa12-0451-4000-b000-000000000000';

        Consts.ACCELEROMETER_PERIOD = 'f000aa13-0451-4000-b000-000000000000';
        Consts.ACCELEROMETER_DATA = 'f000aa11-0451-4000-b000-000000000000';
        Consts.ACCELEROMETER_NOTIFICATION = '00002902-0000-1000-8000-00805f9b34fb';

        Consts.IRTEMPERATURE_SERVICE = 'f000aa00-0451-4000-b000-000000000000';
        Consts.IRTEMPERATURE_CONFIG = 'f000aa02-0451-4000-b000-000000000000';
        Consts.IRTEMPERATURE_DATA = 'f000aa01-0451-4000-b000-000000000000';
        Consts.IRTEMPERATURE_NOTIFICATION = '00002902-0000-1000-8000-00805f9b34fb';

        Consts.HUMIDITY_SERVICE = 'f000aa20-0451-4000-b000-000000000000';
        Consts.HUMIDITY_CONFIG = 'f000aa22-0451-4000-b000-000000000000';
        Consts.HUMIDITY_DATA = 'f000aa21-0451-4000-b000-000000000000';
        Consts.HUMIDITY_NOTIFICATION = '00002902-0000-1000-8000-00805f9b34fb';

        Consts.MAGNETOMETER_SERVICE = 'f000aa30-0451-4000-b000-000000000000';
        Consts.MAGNETOMETER_CONFIG = 'f000aa32-0451-4000-b000-000000000000';
        Consts.MAGNETOMETER_PERIOD = 'f000aa33-0451-4000-b000-000000000000';
        Consts.MAGNETOMETER_DATA = 'f000aa31-0451-4000-b000-000000000000';
        Consts.MAGNETOMETER_NOTIFICATION = '00002902-0000-1000-8000-00805f9b34fb';

        Consts.BAROMETER_SERVICE = 'f000aa40-0451-4000-b000-000000000000';
        Consts.BAROMETER_CONFIG = 'f000aa42-0451-4000-b000-000000000000';
        Consts.BAROMETER_DATA = 'f000aa41-0451-4000-b000-000000000000';
        Consts.BAROMETER_NOTIFICATION = '00002902-0000-1000-8000-00805f9b34fb';
        Consts.BAROMETRIC_PRESSURE_CALIBRATION = 'f000aa4304514000b000000000000000';

        Consts.GYROSCOPE_SERVICE = 'f000aa50-0451-4000-b000-000000000000';
        Consts.GYROSCOPE_CONFIG = 'f000aa52-0451-4000-b000-000000000000';
        Consts.GYROSCOPE_PERIOD = 'f000aa53-0451-4000-b000-000000000000';
        Consts.GYROSCOPE_DATA = 'f000aa51-0451-4000-b000-000000000000';
        Consts.GYROSCOPE_NOTIFICATION = '00002902-0000-1000-8000-00805f9b34fb';

        Consts.KEYPRESS_SERVICE = '0000ffe0-0000-1000-8000-00805f9b34fb';
        Consts.KEYPRESS_DATA = '0000ffe1-0000-1000-8000-00805f9b34fb';
        Consts.KEYPRESS_NOTIFICATION = '00002902-0000-1000-8000-00805f9b34fb';

        Consts.GENERIC_ACCESS = '1800';
        Consts.GENERIC_ATTRIBUTE = '1801';
        Consts.DEVICE_INFORMATION = '180a';
        Consts.SIMPLE_KEY = 'ffe0';
        Consts.TEST = 'f000aa6004514000b000000000000000';
        Consts.TEST_CONFIGURATION = 'f000aa6204514000b000000000000000';
        Consts.OAD = 'f000ffc004514000b000000000000000';
        Consts.DEVICE_NAME = '2a00';
        Consts.APPEARANCE = '2a01';
        Consts.PERIPHERAL_PRIVACY_FLAG = '2a02';
        Consts.RECONNECTION_ADDRESS = '2a03';
        Consts.PERIPHERAL_PREFERRED_CONNECTION_PARAMETERS = '2a04';

        Consts.SYSTEM_ID = '2a23';
        Consts.MODEL_NUMBER = '2a24';
        Consts.SERIAL_NUMBER = '2a25';
        Consts.FIRMWARE_REVISION = '2a26';
        Consts.HARDWARE_REVISION = '2a27';
        Consts.SOFTWARE_REVISION = '2a28';
        Consts.MANUFACTURER_NAME = '2a29';
        Consts.REGULATORY_CERTIFICATE_DATA_LIST = '2a2a';
        Consts.PNP_ID = '2a50';
        Consts.SIMPLE_KEY_DATA = 'ffe1';
        return Consts;
    })();
    tisensortag.Consts = Consts;
})(tisensortag || (tisensortag = {}));
//# sourceMappingURL=Consts.js.map