"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const CodeGen_1 = require("../../types/CodeGen");
exports.register = async (garpqhlClient, tokenProvider, variables) => {
    const query = CodeGen_1.RegisterDocument;
    const token = await tokenProvider.getAccessToken();
    return garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5iYXNpYy5yZWdpc3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZ3JhcGhxbGFwaS9hdXRoLmJhc2ljLnJlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlEQUk2QjtBQUtoQixRQUFBLFFBQVEsR0FBRyxLQUFLLEVBQzNCLGFBQTRCLEVBQzVCLGFBQW9FLEVBQ3BFLFNBQTRCLEVBQ1QsRUFBRTtJQUNyQixNQUFNLEtBQUssR0FBRywwQkFBZ0IsQ0FBQztJQUMvQixNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuRCxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDM0IsS0FBSztRQUNMLEtBQUs7UUFDTCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=