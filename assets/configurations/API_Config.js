const APIs = {
    // Common configurations
    channel: 'POTAL_WEB',
    responses: {
        OK: {
            code: 0,
            message: 'OK',
        },
        TOKEN_INVALID: {
            code: 3,
            message: 'Token không hợp lệ',
        },
        TOKEN_EXPIRE: {
            code: 2,
            message: 'Token đã hết hạn',
        },
        '-1': {
            name: 'UNKNOWN_ERROR',
            message: 'Lỗi không xác định',
        },
        0: {
            name: 'SUCCESS',
            message: 'Thành công',
        },
        1: {
            name: 'TOKEN_INVALID',
            message: 'Token không hợp lệ',
        },
        2: {
            name: 'TOKEN_EXPIRE',
            message: 'Token đã hết hạn',
        },
        3: {
            name: 'REQUEST_INVALID',
            message: 'Yêu cầu không hợp lệ',
        },
        4: {
            name: 'SYSTEM_BUSY',
            message: 'Hệ thống bận',
        },
        5: {
            name: 'UNKNOWN_ERROR',
            message: 'Lỗi không xác định',
        },
        6: {
            name: 'PHONE_INVALID',
            message: 'Số điện thoại không hợp lệ',
        },
        7: {
            name: 'MAIL_INVALID',
            message: 'Email không hợp lệ',
        },
        13: {
            name: 'PHONE_INVALID',
            message: 'Số điện thoại không hợp lệ',
        },
        19: {
            name: 'FILE EXISTS',
            message: 'File đã tồn tại',
        },
        99: {
            name: 'ACCOUNT_EXIST',
            message: 'Lỗi hệ thống',
        },
        101: {
            name: 'ACCOUNT_EXIST',
            message: 'Tài khoản đã tồn tại',
        },
        102: {
            name: 'ACCOUNT_LOCKED',
            message: 'Tài khoản đã bị khóa',
        },
        103: {
            name: 'USER_NOT_EXIST',
            message: 'Tài khoản này không tồn tại',
        },
        105: {
            name: 'PASSWORD_INCORECT',
            message: 'Mật khẩu không đúng',
        },
        111: {
            name: 'DEVICE_EXIST',
            message: 'Thiết bị đã tồn tại',
        },
        112: {
            name: 'BANK_ACC_TYPE_EXIST',
            message: 'Loại tài khoản ngân hàng đã tồn tại',
        },
        113: {
            name: 'USER_POS_EXIST',
            message: 'Tài khoản pos đã tồn tại',
        },
        114: {
            name: 'PERIOD_NO_RESULT',
            message: 'Kỳ quay chưa có kết quả',
        },
        115: {
            name: 'REQUEST_EXIST',
            message: 'Yêu cầu đã tồn tại',
        },
        116: {
            name: 'POS_NOT_EXIST_IN_PARTNERS',
            message: 'Pos không tồn tại đối tác',
        },
        117: {
            name: 'DEBT_NOT_ENOUGH',
            message: 'Nợ chưa đủ',
        },
        118: {
            name: 'REQUEST_NOT_EXIST',
            message: 'Yêu cầu không tồn tại',
        },
        119: {
            name: 'REQUEST_IS_CANCE',
            message: 'Yêu cầu đang được hủy',
        },
        120: {
            name: 'REQUEST_IS_PROCESSING',
            message: 'Yêu cầu đang xử lý',
        },
        121: {
            name: 'REQUEST_IS_FINISH',
            message: 'Yêu cầu Kết thúc',
        },
        122: {
            name: 'ACTION_INVALID',
            message: 'Hành động không hợp lệ',
        },
        123: {
            name: 'REQUEST_IS_PENDING',
            message: 'Yêu cầu đang chờ xử ký',
        },
        124: {
            name: 'AMOUNT_INCORECT',
            message: 'Số tiền không đúng',
        },
        125: {
            name: 'POS_NOT_EXIST',
            message: 'Pos không tồn tại',
        },
        126: {
            name: 'REQUEST_IS_SYS_REJECTED',
            message: 'Yêu cầu bị từ chối',
        },
        127: {
            name: 'GROUP_IS_EXIST',
            message: 'Nhóm đã tồn tại',
        },
        128: {
            name: 'GROUP_NOT_EXIST',
            message: 'Nhóm không tồn tại',
        },
        129: {
            name: 'THE_GROUP_HAS_USERS',
            message: 'Nhóm đã có người dùng',
        },
        130: {
            name: 'GROUPS_NOT_EXIST',
            message: 'Các nhóm không tồn tại',
        },
        131: {
            name: 'PARTNER_IS_EXIST',
            message: 'Đối tác đã tồn tại',
        },
        132: {
            name: 'PARTNER_NOT_EXIST',
            message: 'Đối tác không tồn tại',
        },
        133: {
            name: 'THE_PARTNER_HAS_POS',
            message: 'Đối tác đã có pos',
        },
        134: {
            name: 'POS_CODE_IS_EXIST',
            message: 'Mã pos đã tồn tại',
        },
        135: {
            name: 'THE_POS_HAS_USERS',
            message: 'Pos đã có người dùng',
        },
        136: {
            name: 'POS_NAME_IS_EXIST',
            message: 'Tên pos đã tồn tại',
        },
        137: {
            name: 'PERIOD_NOT_FOUND',
            message: 'Không tìm thấy kỳ',
        },
        138: {
            name: 'RESULT_PERIOD_ALREADY_EXIST',
            message: 'Kết quả của kỳ đã tồn tại',
        },
        139: {
            name: 'QUANTITY_POS_EXCEED',
            message: 'Số lượng post vượt quá',
        },
        140: {
            name: 'OVER_CUT_OFF_TIME',
            message: 'Kết thúc thời gian tắt',
        },
        141: {
            name: 'CASHBACK_EVENT_TIME_EXIST',
            message: 'Thời gian chương trình cashback đã tồn tại',
        },
        142: {
            name: 'CASHBACK_EVENT_FINISHED',
            message: 'Sự kiện chương trình cashback đã kết thúc ',
        },
        143: {
            name: 'RESULT_EXIST',
            message: 'Kỳ quay này đã có kết quả',
        },
        144: {
            name: 'KY_QSMT_IS_CACULATED',
            message: 'Kỳ quay đã mở thưởng',
        },
        145: {
            name: 'KY_QSMT_INVALID_TIME',
            message: 'Thời gian kỳ quay không hợp lệ',
        },
        146: {
            name: 'PAYMENT_FEE_GATE_EXITS',
            message: 'Kênh thanh toán đã tồn tại',
        },
        147: {
            name: 'RESULT_NOT_EXIST',
            message: 'Kết quả không tồn tại',
        },
        148: {
            name: 'KY_QSMT_NOT_YET_OPENED',
            message: 'Kỳ quay chưa mở thưởng',
        },
        149: {
            name: 'PAYMENT_VENDOR_NOT_EXIST',
            message: 'Thanh toán không tồn tại',
        },
        150: {
            name: 'CATEGORY_NOT_EXIST',
            message: 'Danh mục không tồn tại',
        },
        151: {
            name: 'KY_QSMT_NOT_EXIST',
            message: 'Kỳ quay thưởng không tồn tại',
        },
        152: {
            name: 'CFG_TRANSFER_PERIOD_TIME_INVALID',
            message: 'Thời gian bắt đầu nhận đơn kỳ mới không hợp lệ',
        },
        153: {
            name: 'CFG_PRINT_TIME_INVALID',
            message: 'Thời gian in vé không hợp lệ',
        },
        154: {
            name: 'LOTTERY_EXIST',
            message: 'Vé đã tồn tại',
        },
        155: {
            name: 'LOTTERY_SOLD',
            message: 'Xổ số đã bán',
        },
        156: {
            name: 'KY_QSMT_IS_CLOSED',
            message: 'Kỳ quay số mở thưởng đã đóng',
        },
        157: {
            name: 'TICKET_RETURN_INVALID',
            message: 'Hoàn vé không hợp lệ',
        },
        158: {
            name: 'TICKET_RETURN_SUCCESS',
            message: 'Vé hoàn thành công',
        },
        159: {
            name: 'TICKET_RETURN_QUANTITY_EXCEED',
            message: 'Số lượng vé hoàn vượt quá số tồn',
        },
        160: {
            name: 'BASE_DRAW_EXIST',
            message: 'Đài quay đã được gán',
        },
        161: {
            name: 'USER_BASE_EXIST',
            message: 'Tài khoản kho đã tồn tại',
        },
        162: {
            name: 'NO_TICKET_IMPORTED',
            message: 'Nhập vé không thành công',
        },
        163: {
            name: 'TICKETS_CALCULATED',
            message: 'Vé đã được tính thưởng',
        },
        164: {
            name: 'TICKETS_RETURN_CLOSED',
            message: 'Hoàn vé đã đóng',
        },
        165: {
            name: 'CALCU_TICKET_INSTOCK_NOT_FOUND',
            message: 'Vé tồn tính thưởng không tìm thấy',
        },
        166: {
            name: 'NOT_FOUND_TICKET_INSTOCK_CALCU',
            message: 'Vé tồn tính thưởng không tìm thấy',
        },
        167: {
            name: 'PERIOD_TICKETS_SOLD_OUT',
            message: 'Kỳ bán hết vé',
        },
        168: {
            name: 'ORDER_CALCULATED',
            message: 'Đơn đã được tính thưởng',
        },
        169: {
            name: 'USER_ACTION_DENIED',
            message: 'Tài khoản không có quyền',
        },
        170: {
            name: 'REPORT_ORDER_EXPIRE',
            message: 'Thời gian báo lỗi vé đã hết',
        },
        171: {
            name: 'TICKET_PAYING_REWARD',
            message: 'Vé đang trả thưởng',
        },
        172: {
            name: 'TICKET_RETURN_EXPIRED',
            message: 'Quá thời gian hoàn vé',
        },
        173: {
            name: 'TIME_BREAK_RECV_ORDER_GREATER_SALE_OPEN',
            message: 'Thời gian ngừng nhận đơn lớn hơn thời gian mở bán',
        },
        174: {
            name: 'TIME_PRINT_GREATER_SALE_OPEN',
            message: 'Thời gian in vé lớn hơn thời gian mở bán',
        },
        175: {
            name: 'TIME_BREAK_RECV_ORDER_GREATER_TIME_PRINT',
            message: 'Thời gian ngừng nhận đơn lớn hơn thời gian in vé',
        },
        176: {
            name: 'TICKET_NOT_EXIST',
            message: 'Vé không tồn tại',
        },
        177: {
            name: 'OVER_TIME_RESULTS_ALLOWED',
            message: 'Quá thời gian tìm kiếm cho phép',
        },
        178: {
            name: 'USER_NOT_ASSIGN_BASE',
            message: 'Tài khoản chưa thuộc kho nào',
        },
        179: {
            name: 'IMAGE_TICKET_NOT_EXIST',
            message: 'Hình ảnh vé không tồn tại',
        },
        181: {
            name: 'AUTO_CF_RESULT_KY_QSMT_NOT_YET_OPENED',
            message: 'Tự động duyệt kết quả không thành công, Kỳ quay chưa mở thưởng',
        },
        999: {
            name: 'SYSTEM_ERROR',
            message: 'Hệ thống bận',
        },
        1001: {
            name: 'ACCOUNT_OR_PASSWORD_INCORECT',
            message: 'Tài khoản hoặc mật khẩu không đúng',
        },
        1010: {
            name: 'ACCOUNT_IS_ADMIN',
            message: 'Không thể xóa tài khoản quản trị viên',
        },
        1023: {
            name: 'PAYMENT_VEDOR_ALREADY_EXISTS_IN_GROUP',
            message: 'Nguồn tiền đã tồn tại trong nhóm',
        },
        1020: {
            name: 'PAYMENT_VENDOR_NOT_EXITS',
            message: 'Thanh toán không tồn tại',
        },
        1021: {
            name: 'ORDER_NOT_EXIST',
            message: 'Đơn hàng không tồn tại',
        },
        1022: {
            name: 'CATEGORY_ALREADY_EXISTS_IN_GROUP',
            message: 'Sản phẩm đã tồn tại trong nhóm',
        },
        1024: {
            name: 'PAYMENT_VENDOR_NOT_EXIST_IN_GROUP',
            message: 'Thanh toán không tồn tại trong nhóm',
        },
        1025: {
            name: 'CATEGORY_NOT_EXISTS_IN_GROUP',
            message: 'Danh mục không tồn tại trong nhóm',
        },
        1026: {
            name: 'ORDER_LOCKED',
            message: 'Đơn hàng đã khóa',
        },
    },

    // APIs
    login: {
        url: 'user/login',
        // baseURL: 'http://103.147.34.20:10010/api',
        baseURL: 'https://core-dev.vtvtravel.vn/sys/v1/tourism/admin',
        method: 'POST',
        responses: {
            CREDENTIALS_INVALID: {
                code: 1001,
                message: 'Tên người dùng hoặc mật khẩu không hợp lệ',
            },
        },
    },
    //http://222.252.16.140:10000/api/cms/account/get_role_by_user?transid=xxx&channel=cms
    getRoleByUser: {
        url: 'user/getPageRole',
        method: 'GET',
        responses: {},
    },
    //END UsersAPI
    getListGroupUsers: {
        url: 'user/group/list',
        method: 'GET',
        responses: {},
    },
    getListUsers: {
        url: 'user/list',
        method: 'GET',
    },
    getUser: {
        url: 'cms/account/get_detail',
        method: 'GET',
    },
    updateUser: {
        url: 'cms/account/update',
        method: 'POST',
    },
    addUser: {
        url: 'cms/account/add',
        method: 'POST',
        responses: {
            ACCOUNT_EXIST: {
                code: 101,
                message: 'Tài khoản đã tồn tại',
            },
        },
    },
    resetUserPass: {
        url: 'cms/account/reset_pass',
        method: 'POST',
        responses: {},
    },
    changePass: {
        url: 'cms/account/change_password',
        method: 'POST',
    },
    deleteUser: {
        url: 'cms/account/delete',
        method: 'POST',
        responses: {},
    },
    getListPages: {
        url: 'user/page/list',
        method: 'GET',
        responses: {},
    },
    getGroupUser: {
        url: 'user/group/detail',
        method: 'GET',
        responses: {},
    },
    deleteGroupUser: {
        url: 'user/group/delete',
        method: 'GET',
        responses: {},
    },
    updateGroupUser: {
        url: 'user/group/update',
        method: 'POST',
        responses: {},
    },
    addGroupUser: {
        url: 'user/group/add',
        method: 'POST',
        responses: {},
    },
    checkDeleteGroupUser: {
        url: 'cms/group/check_group_id',
        method: 'GET',
        responses: {},
    },
}

export default APIs
