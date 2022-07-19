{ pkgs }: {
    deps = [
		pkgs.most
		pkgs.less
		pkgs.man-db
		pkgs.neovim-unwrapped
		pkgs.gh
		pkgs.bat
		pkgs.lf
		pkgs.lazygit
		pkgs.bash-completion
		pkgs.nodejs-18_x
			pkgs.nodePackages.pnpm
			pkgs.nodePackages.jsdoc
      pkgs.nodePackages.neovim
      pkgs.nodePackages.vim-language-server
		pkgs.python310
      pkgs.python310Packages.pynvim
    pkgs.terminal-colors

      
    ];
}
